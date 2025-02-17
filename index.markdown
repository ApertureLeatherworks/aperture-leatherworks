---
layout: default
title: Home
---

<header class="hero">
    <h1>Aperture Leatherworks</h1>
    <p class="slogan">Exclusively Handmade in England</p>
</header>

<section class="intro">
    <p>Welcome to Aperture Leatherworks, where craftsmanship meets tradition. Our handmade leather goods are crafted with precision, passion, and care in England.</p>
</section>

<section class="products">
    {% for product in site.data.products %}
    <div class="product">
        <img src="{{ product.image }}" alt="{{ product.name }}">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p>Price: £{{ product.price }}</p>
        <a href="{{ product.stripe_link }}" class="cta">Buy Now</a>
    </div>
    {% endfor %}
</section>
