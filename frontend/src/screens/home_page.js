// import React, { useState } from "react";
// import Kings_logo from './Images/kings_logo.png';
// import Logout_logo from './Images/log-out.png';
// import { Link } from 'react-router-dom';
// import Cart_logo from './Images/Cart_icon.png';
// import products from "../../data/Products";

// function Home_Page() {
//   const [currentCategory, setCurrentCategory] = useState("All"); 

//   const [Menu] = useState([
//     {
//       title: 'Chicken Momo',
//       Image: '/public/Images/momo.png',
//       type: 'non-veg',
//     },
//     {
//       title: 'Veg Momo',
//       Image: '/public/Images/veg_momo.png',
//       type: 'veg',

//     },
//     {

//       title: 'Cheese toast',
//       Image: '/public/Images/Cheese_Toast.png',
//       type: 'veg',


//     },
//     {
//       title: 'Chanaa',
//       Image: '/public/Images/Channa.png',
//       type: 'veg',


//     },
//     {
//       title: 'Aloo Chop',

//       Image: '/public/Images/AlooChopImage.png',
//       type: 'veg',


//     },
//     {
//       title: 'Veg Pakauda',

//       Image: '/public/Images/pakaudaa.png',
//       type: 'veg',

//     },
//     {
//       title: 'Chicken Fried Rice',

//       Image: '/public/Images/Chicken-Fried-Rice.png',
//       type: 'non-veg',



//     },
//     {
//       title: 'Veg Fried Rice',
//       Image: '/public/Images/vegfriedrice.png',
//       type: 'veg',


//     },
//     {
//       title: 'Chicken Sandwich',
//       Image: '/public/Images/shredded-chicken-sandwich-removebg-preview.png',
//       type: 'non-veg',

//     },
//     {
//       title: 'Veg Sandwich',
//       Image: '/public/Images/Vegetable-Sandwich.png',
//       type: 'veg',

//     },

//     {
//       title: 'Veg Chowmin',
//       Image: '/public/Images/vegetable-chowmin.png',
//       type: 'veg',

//     },
//     {
//       title: 'Chicken Chowmin',
//       Image: '/public/Images/chicken-chowmin.png',
//       type: 'non-veg',


//     },
//     {
//       title: 'Boil Egg',
//       Image: '/public/Images/BoilEgg.png',
//       type: 'non-veg',


//     },
//     {
//       title: 'Omlette',
//       Image: '/public/Images/omlette.png',
//       type: 'non-veg',


//     },
//     {
//       title: 'Mix Fruits',
//       Image: '/public/Images/Mix-Fruits.png',
//       type: 'veg',


//     },
//     {
//       title: 'Coffee',
//       Image: '/public/Images/coffee.png',
//       type: 'drinks',


//     },
//     {
//       title: 'Milk Tea',
//       Image: '/public/Images/MilkTea.png',
//       type: 'drinks',


//     },
//     {
//       title: 'Black Tea',
//       Image: '/public/Images/BlackTea.png',
//       type: 'drinks',


//     },
//     {
//       title: 'Green Tea',
//       Image: '/public/Images/GreenTea.png',
//       type: 'drinks',

//     },
//     {
//       title: 'Hot Lemon',
//       Image: '/public/Images/Hot_Lemon.png',
//       type: 'drinks',

//     },
//     {
//       title: 'Juice',
//       Image: '/public/Images/Juice.png',
//       type: 'drinks',

//     },
//   ])

//   const [itemCounts, setItemCounts] = useState(Menu.reduce((acc, item) => {
//     acc[item.title] = 1; // Initialize each item's count to 1
//     return acc;
//   }, {}));

//   const Increment = (title) => {
//     const updatedCounts = { ...itemCounts };
//     updatedCounts[title] += 1;
//     setItemCounts(updatedCounts);
//   }

//   const Decrement = (title) => {
//     if (itemCounts[title] > 1) {
//       const updatedCounts = { ...itemCounts };
//       updatedCounts[title] -= 1;
//       setItemCounts(updatedCounts);
//     }
//   }

//   const filterMenuByCategory = (category) => {
//     if (category === "All") {
//       return Menu;
//     } else {
//       return Menu.filter(item => item.type === category);
//     }
//   }

//   return (
//     <>

//       <div className="Home_page">

//         <div className="Canteen">
//           <div className="Kings_Canteen">
//             <h1> King's</h1>
//             <h1>Canteen</h1>
//           </div>
//           <div className="Grab_a_bite">
//             <h1> <i>grab a</i></h1>
//             <h1> <i>bite!</i></h1>
//           </div>


//         </div>
//         <div className="Container">
//         <div className="Nav_bar">
//           <img src={Kings_logo} height={60} width={40} />
//           <div className="All" onClick={() => setCurrentCategory("All")}>All</div>
//           <div className="Non-veg" onClick={() => setCurrentCategory("non-veg")}>Non-Veg</div>
//           <div className="Veg" onClick={() => setCurrentCategory("veg")}>Veg</div>
//           <div className="Drinks" onClick={() => setCurrentCategory("drinks")}>Drinks</div>
//           <img className="Cart_icon"src={Cart_logo} height={55}></img>
//           <img className="Logout_icon"src={Logout_logo} height={90}></img>

//         </div>


//         <div className="Menu">
//           {filterMenuByCategory(currentCategory).map((All_Menu, i) => (
//             <div key={i} className="All_Menu">
//               <img src={All_Menu.Image} height={150} width={150} />
//               <h1>{All_Menu.title}</h1>
//               <div className="items">
//                 <div className="quant">
//                   <div className="btn" onClick={() => Decrement(All_Menu.title)}>-</div>
//                   <div>{itemCounts[All_Menu.title]}</div>
//                   <div className="btn" onClick={() => Increment(All_Menu.title)}>+</div>
//                 </div>
//                 <div className="price">Rs</div>
//               </div>
//               <button className="Add_to_Cart">
//                 <ul>
//                   <li>
//                     <Link to="/home/shistiiii/Documents/shistii/Kings_Canteen/src/Cart_Page.jsx"> 
//                     Add to Cart
//                     </Link>
//                   </li>
//                 </ul>
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//       </div>
//     </>
//   )
// }


// export default Home_Page;




// import React from "react";
// import { Link } from "react-router-dom";
// import Rating from "./Rating";
// import Pagination from "./Pagination"; // Assuming you have a Pagination component

// import products from "../data/Products"; // Corrected import path

// const Home_Page = () => {
//   return (
//     <div className="container">
//       <div className="section">
//         <div className="row">
//           <div className="col-lg-12 col-md-12 article"> 
//             <div className="shopcontainer row">
//               {products.map((product) => (
//                 <div className="shop col-lg-4 col-md-6 col-sm-6" key={product._id}> 
//                   <div className="border-product">
//                     <Link to={`/products/${product._id}`}> 
//                       <div className="shopBack">
//                         <img src={product.image} alt={product.name} />
//                       </div>
//                     </Link>
//                     <div className="shoptext">
//                       <p>
//                         <Link to={`/products/${product._id}`}>{product.name}</Link>
//                       </p>
//                       <Rating value={product.rating} text={`${product.numReviews} reviews`} />
//                       <h3>${product.price}</h3>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//               {/* Pagination */}
//               <Pagination />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home_Page;



import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Cart_logo from './Images/Cart_icon.png';
//import products from "../../data/Products"; // Import your product data
import axios from "axios"


const ShopSection = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchproducts = async() => {
      const {data} = await axios.get("/api/products") 
      setProducts(data);

    };
    fetchproducts();
  }, []);
}

function Home_Page() {
  const [currentCategory, setCurrentCategory] = useState("All");
  const [itemCounts, setItemCounts] = useState({}); // Initialize itemCounts as an empty object

  const Increment = (productId) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 0) + 1,
    }));
  }

  const Decrement = (productId) => {
    if (itemCounts[productId] > 1) {
      setItemCounts((prevCounts) => ({
        ...prevCounts,
        [productId]: prevCounts[productId] - 1,
      }));
    }
  }

  const filterProductsByCategory = (category) => {
    if (category === "All") {
      return products;
    } else {
      return products.filter(product => product.category === category);
    }
  }

  return (
    <>
      <div className="Home_page">
        <div className="Canteen">
          <div className="Kings_Canteen">
            <h1>King's</h1>
            <h1>Canteen</h1>
          </div>
          <div className="Grab_a_bite">
            <h1><i>grab a</i></h1>
            <h1><i>bite!</i></h1>
          </div>
        </div>
        <div className="Container">
          <div className="Nav_bar">
            {/* Your navigation bar */}
            <img src={Cart_logo} height={55} alt="Cart" />
          </div>
          <div className="Menu">
            {filterProductsByCategory(currentCategory).map((product, i) => (
              <div key={i} className="All_Menu">
                <img src={product.image} height={150} width={150} alt={product.title} />
                <h1>{product.title}</h1>
                <div className="items">
                  <div className="quant">
                    <div className="btn" onClick={() => Decrement(product._id)}>-</div>
                    <div>{itemCounts[product._id] || 0}</div>
                    <div className="btn" onClick={() => Increment(product._id)}>+</div>
                  </div>
                  <div className="price">Rs {product.price}</div>
                </div>
                <button className="Add_to_Cart">
                  <ul>
                    <li>
                      <Link to={`/products/${product._id}`}>
                        Add to Cart
                      </Link>
                    </li>
                  </ul>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home_Page;
