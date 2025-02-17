const stripe = require('stripe')('pk_test_51QtV66QWyozYsbmvXzTSr3DbW8hBLCbPzKnrCmLtNB5FV7kNmXyqehDdaTqpr2UyjY2H16fkIkE80yY3g9gURkCe00Wk4KroNt'); // Replace with your secret key

exports.handler = async (event, context) => {
    const { product } = JSON.parse(event.body);

    const productDetails = {
        wallet: { name: 'Handmade Leather Wallet', price: 5000 },
        bag: { name: 'Handmade Leather Bag', price: 10000 }
    };

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'gbp',
                    product_data: {
                        name: productDetails[product].name,
                    },
                    unit_amount: productDetails[product].price,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `https://apertureleatherworks.co.uk/success`,
        cancel_url: `https://apertureleatherworks.co.uk/cancel`,
    });

    return {
        statusCode: 200,
        body: JSON.stringify({ sessionId: session.id }),
    };
};
