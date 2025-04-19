import React from 'react'

const Header = () => {
    return (
        <>
            {/* Header section start */}
            <div className="header-main">
                <div className="container">
                    <div className="header-inner">

                        {/* header-top section start */}
                        <div className="header-top">
                            <div className="header-left">
                                <div className="header1-title">
                                    <p>Free shipping for all products</p>
                                </div>
                            </div>
                            <div className="header-right">
                                <ul className='right-inner'>
                                    <li><a href="#">My Account</a></li>
                                    <li><a href="#">Cart</a></li>
                                    <li><a href="#">Wishlist</a></li>
                                    <li><a href="#">Checkout</a></li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        {/* header-top section end */}

                        {/* header-bottom section start */}
                        <div className="header-bot">
                            <div className="header-1">
                                <div className="header-logo">
                                    <a href="#"><img src="http://wp.plazathemes.com/corano/wp-content/uploads/2019/07/logo_corano.png" alt="" /></a>
                                </div>
                            </div>
                            <div className="header-2">
                                <ul className="header2-content">
                                    <li className="home"><a href="#" className="main-a">Home</a>
                                        <ul className="sub-ul">
                                            <li><a href="#">Home shop 1</a></li>
                                            <li><a href="#">Home shop 2</a></li>
                                            <li><a href="#">Home shop 3</a></li>
                                            <li><a href="#">Home shop 4</a></li>
                                        </ul>
                                    </li>
                                    <li className='shop'><a href="#" className="main-a">Shop</a>
                                    <div className="shop-inner">
                                            <ul className="sec-sub-ul">
                                                <li>
                                                    <span>Shop Layouts</span>
                                                    <a href="#">Sidebar Left</a>
                                                    <a href="#">Sidebar Right</a>
                                                    <a href="#">Full Width</a>
                                                    <a href="#">List View</a>
                                                </li>
                                                <li>
                                                    <span>Shop Pages</span>
                                                    <a href="#">Category</a>
                                                    <a href="#">My account</a>
                                                    <a href="#">Wishlist</a>
                                                    <a href="#">Cart</a>
                                                    <a href="#">Checkout</a>
                                                </li>
                                                <li>
                                                    <span>Product Types</span>
                                                    <a href="#">Grouped  Product</a>
                                                    <a href="#">Variable Product</a>
                                                    <a href="#">Simple Product</a>
                                                    <a href="#">External Product</a>
                                                </li>
                                            </ul>
                                    </div>
                                    </li>
                                    <li className='blog'><a href="#" className="main-a">Blog</a>
                                        <div className="header-blog-sub">
                                            <ul className="blog-sub-ul">
                                                <li>
                                                    <span>Blog Layouts</span>
                                                    <a href="#">Sidebar Left</a>
                                                    <a href="#">Sidebar Right</a>
                                                    <a href="#">Large image</a>
                                                    <a href="#">Blog Grid</a>
                                                    <a href="#">No Sidebar</a>
                                                </li>
                                                <li>
                                                    <span>Blog Pages</span>
                                                    <a href="#">Author</a>
                                                    <a href="#">Archives</a>
                                                    <a href="#">Category</a>
                                                    <a href="#">Blog Tag</a>
                                                </li>
                                                <li>
                                                    <span>Post Formats</span>
                                                    <a href="#">Image Format</a>
                                                    <a href="#">Gallery Format</a>
                                                    <a href="#">Audio Format</a>
                                                    <a href="#">Video Format</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className='page'><a href="#" className="main-a">Pages</a>
                                        <div className="page-sub">
                                            <ul className='page-sub-ul'>
                                                <li><a href="#">Frequently Questions</a></li>
                                                <li><a href="#">Privacy Policy</a></li>
                                                <li><a href="#">About Us</a></li>
                                                <li><a href="#">Error 404</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a href="#" className="main-a contact-a">Contact</a></li>
                                </ul>
                            </div>
                            <div className="header-3">
                                <div className="header-search">
                                    <input type="text" name="" className='header-inp' placeholder='Search product...' />
                                    <div className="hs-btn">
                                        <button className='hs-btn'><i class="fa-solid fa-magnifying-glass"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="header-4">
                                <div className="header4-inner">
                                    <ul className='header4-content'>
                                        <li><a href="#">
                                            <i class="fa-solid fa-user"></i>
                                        </a></li>
                                        <li><a href="#">
                                            <i class="fa-solid fa-heart"></i>
                                        </a></li>
                                        <li><a href="#">
                                            <i class="fa-solid fa-bag-shopping"></i>
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* header-bottom section end */}
                    </div>
                </div>
            </div>
            {/* Header section end */}
        </>
    )
}

export default Header
