<template>
  <div class="humberger__menu__overlay" />

  <div class="humberger__menu__wrapper">
    <div class="humberger__menu__logo">
      <a href="#"><img
        src="@/assets/img/logo.png"
        alt=""
      ></a>
    </div>
    <div class="humberger__menu__cart">
      <ul>
        <li><a href="#"><i class="fa fa-heart" /> <span>1</span></a></li>
        <li><a href="#"><i class="fa fa-shopping-bag" /> <span>3</span></a></li>
      </ul>
      <div class="header__cart__price">
        item: <span>$150.00</span>
      </div>
    </div>
    <div class="humberger__menu__widget">
      <div class="header__top__right__language">
        <img
          src="@/assets/img/language.png"
          alt=""
        >
        <div>English</div>
        <span class="arrow_carrot-down" />
        <ul>
          <li><a href="#">Spanis</a></li>
          <li><a href="#">English</a></li>
        </ul>
      </div>
      <div class="header__top__right__auth">
        <a href="#"><i class="fa fa-user" /> Login</a>
      </div>
    </div>
    <nav class="humberger__menu__nav mobile-menu">
      <ul>
        <li class="active">
          <a href="./index.html">Home</a>
        </li>
        <li><a href="./shop-grid.html">Shop</a></li>
        <li>
          <a href="#">Pages</a>
          <ul class="header__menu__dropdown">
            <li><a href="./shop-details.html">Shop Details</a></li>
            <li><a href="./shoping-cart.html">Shoping Cart</a></li>
            <li><a href="./checkout.html">Check Out</a></li>
            <li><a href="./blog-details.html">Blog Details</a></li>
          </ul>
        </li>
        <li><a href="./blog.html">Blog</a></li>
        <li><a href="./contact.html">Contact</a></li>
      </ul>
    </nav>
    <div id="mobile-menu-wrap" />
    <div class="header__top__right__social">
      <a href="#"><i class="fa fa-facebook" /></a>
      <a href="#"><i class="fa fa-twitter" /></a>
      <a href="#"><i class="fa fa-linkedin" /></a>
      <a href="#"><i class="fa fa-pinterest-p" /></a>
    </div>
    <div class="humberger__menu__contact">
      <ul>
        <li><i class="fa fa-envelope" /> hello@colorlib.com</li>
        <li>Free Shipping for all Order of $99</li>
      </ul>
    </div>
  </div>
</template>