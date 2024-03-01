
export const navigation = {

    categories: [
        {
            id: 'women',
            name: 'Women',
            featured: [
                {
                    name: 'New Arrivals',
                    href :'/',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                    imageAlt: 'Models sitting back to back, wearing basic tee in black and bone.',                    
                },
                {
                    name: 'Basic Tees',
                    href :'/',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic tee Fall bundle with off-whie, orchre, olive and black tee.',
                },
            ],
            section :[
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        { name: 'Tops', id: "top", href: `{women/clothing/tops}`},
                        { name: 'Dresses', id: "women_dress", href: '#'},
                        { name: 'Women Jeans', id: 'women_jeans'},
                        { name: 'Lengha Choli', id: 'lengha_choli'},
                        { name: 'Sweater', id: 'sweater'},
                        { name: 'T-Shirt', id: 't-shirt'},
                        { name: 'Jackets', id: 'jacket'},
                        { name: 'Gouns', id: 'gouns'},
                        { name: 'Sarees', id: 'sareee'},
                        { name: 'Kurtas', id: 'kurtas'},
                    ],                                        
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        { name: 'Watches', id: 'watch'},
                        { name: 'Wallets', id: 'wallet'},
                        { name: 'Bags', id: 'bag'},
                        { name: 'Sunglasses', id: 'sunglasse'},
                        { name: 'Hats', id: 'hat'},
                        { name: 'Belts', id: 'belt'},


                    ],                    
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    items: [
                        { name: 'Full Nelson', id: '#'},
                        { name: 'My way', id: '#'},
                        { name: 'Re-Arranged', id: '#'},
                        { name: 'Counterfelt', id: '#'},
                        { name: 'Significant Other', id: '#'},
                    ],                    
                },
            ],
        },
        {
            id: 'men',
            name: 'Men',
            featured: [
                {
                    name: 'New Arrivals',
                    href :'#',
                    imageSrc: 'https://img.freepik.com/free-photo/young-handsome-man-choosing-clothes-shop_1303-19720.jpg',
                    imageAlt: 'Models sitting back to back, wearing basic tee in black and bone.',                    
                },
                {
                    name: 'Artwork Tees',
                    href :'/',
                    imageSrc: 'https://i.pinimg.com/736x/76/10/d1/7610d11772f0a8c06b3fade9bd451572.jpg',
                    imageAlt: 'This shirt in gray, white and blue arranged on table with same line.',
                },
            ],
            section :[
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        { name: 'Mens Kurtas', id: "mens_kurta"},
                        { name: 'Shirt', id: "shirt"},
                        { name: 'Men Jeans', id: 'men_jeans'},
                        { name: 'Sweaters', id: '#'},
                        { name: 'Hoddies', id: '#'},
                        { name: 'T-Shirt', id: 't-shirt'},
                        { name: 'Jackets', id: '#'},                        
                        { name: 'Activewear', id: '#'},
                    ],                                        
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        { name: 'Watches', id: '#'},
                        { name: 'Wallets', id: '#'},
                        { name: 'Bags', id: '#'},
                        { name: 'Sunglasses', id: '#'},
                        { name: 'Hats', id: '#'},
                        { name: 'Belts', id: '#'},


                    ],                    
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    items: [
                        { name: 'Full Nelson', id: '#'},
                        { name: 'My way', id: '#'},
                        { name: 'Re-Arranged', id: '#'},
                        { name: 'Counterfelt', id: '#'},
                        { name: 'Significant Other', id: '#'},
                    ],                    
                },
            ],
        }
    ],
    pages:[
        {name: 'Company', id: '/'},
        {name: 'Stores', id: '/'},
    ],
}

