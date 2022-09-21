import React, { createContext, useState } from 'react'
export const store = createContext()
const Data = (props) => {
    const [data,SetData] = useState([
         {
        id : 1,
        category : 'Food',
        image : 'https://media.istockphoto.com/photos/group-of-south-indian-food-like-masala-dosa-uttapam-idliidly-wadavada-picture-id1024558722?k=20&m=1024558722&s=612x612&w=0&h=hTH3BnPQ9tB-zOv7qZM5mtiIPLIU71m-kf0YoCE-uyE=',
        title : 'Break Fast',
        about : 'Breakfast is often called ‘the most important meal of the day’, and for good reason. As the name suggests, breakfast breaks the overnight fasting period. It replenishes your supply of glucose to boost your energy levels and alertness, while also providing other essential nutrients required for good health.',
        Date : 'jan 25,2022'

    },
    {
        id : 2,
        category : 'Food',
        type : 'Artical',
        image : 'https://media.istockphoto.com/photos/indian-hindu-veg-thali-food-platter-selective-focus-picture-id1158578874?k=20&m=1158578874&s=612x612&w=0&h=nsDq0x82Td02zHQKAOBB0pdY-kVzpN5P_qpXbUxsLB4=',
        title : 'Telugu cuisine',
        about : 'Telugu cuisine is a cuisine of South India native to the Telugu people from the states of Andhra & Telangana and Yanam. Generally known for its tangy, hot and spicy taste, the cooking is very diverse due to the vast spread of the people and varied topological regions.',
        Date : 'Aug 5,2021'
    },
    {
        id : 3,
        category : 'Food',
        type : 'Story',
        image : 'https://media.istockphoto.com/photos/chicken-biryani-with-yogurt-dip-popular-indian-pakistani-non-food-picture-id1254720533?k=20&m=1254720533&s=612x612&w=0&h=zW06rXulNX6DEHECK1r5P-0z_4dhNGsOJ6dxK0yPS7Q=',
        title : 'Biryani',
        about : 'Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together. The bottom layer of rice absorbs all the chicken juices as it cooks, giving it a tender texture and rich flavor, while the top layer of rice turns out white and fluffy.',
        Date : '9 jul 2022'
    },
    {
        id : 4,
        category : 'Food',
        image : 'https://media.istockphoto.com/photos/-picture-id1341679579?k=20&m=1341679579&s=612x612&w=0&h=fOKkFlNx249fzsaeR8SR_LYpdP5MY4a_wjHzq9FTvtw=',
        title : 'Salad',
        about : 'A salad is a dish consisting of mixed, mostly natural ingredients with at least one raw ingredient. They are often dressed, and typically served at room temperature or chilled, though some can be served warm. Pieces of vegetables, fruits, meat, eggs, or grains mixed with a sauce.',
        Date : ' 15 September 2022'
    },
    {
        id : 5,
        category : 'Food',
        image : 'https://media.istockphoto.com/photos/japanese-restaurant-sushi-dish-picture-id497022342?k=20&m=497022342&s=612x612&w=0&h=VkCoBfI4q67KiRfyIJ-bQx3S1EyjTfEWL2DtP9Ird-0=',
        title : 'Sushi',
        about : 'Sushi is a Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanied by a variety of ingredients, such as seafood, often raw, and vegetables. Styles of sushi and its presentation vary widely, but the one key ingredient is "sushi rice", also referred to as shari, or sumeshi.',
        Date : '14 September 2022'
    },
    {
        id : 6,
        category : 'Food',
        image : 'https://media.istockphoto.com/photos/slice-of-chocolate-cake-with-glaze-picture-id1370520449?b=1&k=20&m=1370520449&s=170667a&w=0&h=ee4jYV7EBN53zDONughFlXDc0ZNW8vqM4dSKVhYdEk8=',
        title : 'Chocolate brownie',
        about : 'A brownie is a dense chocolate-flavored baked good traditionally served in small squares. Brownies often contain ingredients like nuts or extracts to give them a distinct flavor other than pure chocolate.',
        Date : '03-Feb-2022'
    },
    {
        id : 7,
        category : 'Food',
        image : 'https://media.istockphoto.com/photos/ice-cream-picture-id121288838?k=20&m=121288838&s=612x612&w=0&h=-asAqRSkUh_1C9HUcFD2ZSluNQ7w2svqQ83KJVNU9YQ=',
        title : 'Ice Cream',
        about : 'Ice cream is a sweetened frozen food typically eaten as a snack or dessert. It may be made from milk or cream and is flavoured with a sweetener, either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruit such as strawberries or peaches',
        Date : '2 September 2022'
    },
    ///--------Tourism-------------
    {
        id : 8,
        category : 'Tourism',
        image : 'https://media.istockphoto.com/photos/taj-mahal-agra-india-monument-of-love-in-blue-sky-picture-id519330110?k=20&m=519330110&s=612x612&w=0&h=c6aWpRD_0BrCvL6D_UTS23jtYqXgcqkJ1mCzHa7lpCM=',
        title : 'Tourism-1',
        about : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Date : '9 jul 2022'
    },
    {
        id : 9,
        category : 'Tourism',
        image : 'https://media.istockphoto.com/photos/hawa-mahal-jaipur-india-picture-id482557081?k=20&m=482557081&s=612x612&w=0&h=LontnFctJTY--euwLwo1fsdkt3YNiDtLoCa2HtDSpnE=',
        title : 'Tourism-2',
        about : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Date : '19 jun 2022'
    },
    {
        id : 10,
        category : 'Tourism',
        image : 'https://media.istockphoto.com/photos/houseboat-in-alappuzha-backwaters-kerala-picture-id1266651692?k=20&m=1266651692&s=612x612&w=0&h=_Y8p-Bu-Sev3bX9gGbdlhkwEpJNWivKmh46z6hv3RsM=',
        title : 'Tourism-3',
        about : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Date : '21 Feb 2022'
    },
    {
        id : 11,
        category : 'Tourism',
        image : 'https://media.istockphoto.com/photos/one-of-the-best-beaches-in-goa-cola-beach-picture-id857389362?k=20&m=857389362&s=612x612&w=0&h=U1THyfFD_OYkSfb8amIchaQU5T8rw4qrkr_GE1uZ9DE=',
        title : 'Tourism-4',
        about : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Date : '9 Aug 2022'
    },
    {
        id : 12,
        category : 'Tourism',
        image : 'https://media.istockphoto.com/photos/evening-view-of-padmanabha-swamy-temple-thiruvananthapuram-the-temple-picture-id1274361840?k=20&m=1274361840&s=612x612&w=0&h=5fWEZRl6YyCLmpVAbejn-xSgaCsc9wqvxz23kywpxB8=',
        title : 'Tourism-5',
        about : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Date : '15 Sept 2022'
    },
    {
        id : 13,
        category : 'Tourism',
        image : 'https://media.istockphoto.com/photos/jog-falls-india-picture-id506104167?k=20&m=506104167&s=612x612&w=0&h=FLPY94QMvVSftiNhDmHfi1iGQGX3j2VDxAV2iSRkKdc=',
        title : 'Tourism-6',
        about : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Date : '18 Nov 2021'
    },
    {
        id : 14,
        category : 'Tourism',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgCeEHc8eF6Jp1xAGYm3LKlb88LI8s2kat4g&usqp=CAU',
        title : 'Tourism-7',
        about : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Date : '9 jan 2022'
    },
    ///----------Fitness------------------
    {
        id : 15,
        category : 'Fitness',
        image : 'https://media.istockphoto.com/photos/handsome-man-legs-workout-with-kettlebell-in-the-gym-picture-id1057146526?k=20&m=1057146526&s=612x612&w=0&h=0jUvSTxi1CAYray-7SWiTImCiwRkzK2CgZDQfbldZuU=',
        title : 'Fitness-1',
        about : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Date : '9 jan 2022'
    },
    {
        id : 16,
        category : 'Fitness',
        image : 'https://media.istockphoto.com/photos/body-building-workout-picture-id612262390?k=20&m=612262390&s=612x612&w=0&h=HsDQYDCXgHnniZKliul4hMxiWM5fEb-aF3I-HmeejPc=',
        title : 'Fitness-2',
        about : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Date : '9 jan 2022'
    },
    {
        id : 17,
        category : 'Fitness',
        image : 'https://media.istockphoto.com/photos/be-as-strong-as-you-were-born-to-be-picture-id1279902517?k=20&m=1279902517&s=612x612&w=0&h=RlVc-49u3noWYHy0XE4IHvRuKD3_kfelklxIGrYz9bI=',
        title : 'Fitness-3',
        about : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Date : '9 jan 2022'
    },
    {
        id : 18,
        category : 'Fitness',
        type : 'Artical',
        image : 'https://media.istockphoto.com/photos/fitnessoman-practicing-lunges-using-barbell-in-gym-picture-id1264091205?k=20&m=1264091205&s=612x612&w=0&h=a_68mOQIj8SPmYK-mDmHQ93xDV95Yd3bn0dKbjr2hS8=',
        title : 'Fitness-4',
        about : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Date : '9 jan 2022'
    },
    {
        id : 19,
        category : 'Fitness',
        image : 'https://media.istockphoto.com/photos/small-group-of-people-running-in-the-autumn-park-picture-id1080232360?k=20&m=1080232360&s=612x612&w=0&h=2YnHIh77RyqWo-5gj8Fyz9mH0d26NEeMpVIbHyftkIc=',
        title : 'Fitness-5',
        about : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Date : '9 jan 2022'
    },
    {
        id : 20,
        category : 'Fitness',
        image : 'https://media.istockphoto.com/photos/man-meditating-in-lotus-position-picture-id1187648861?k=20&m=1187648861&s=612x612&w=0&h=7H4YUCk047Mv3YM2yRNjQ1rR43E2ueX7jitsrKDD98A=',
        title : 'Fitness-6',
        about : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Date : '9 jan 2022'
    },
    {
        id : 21,
        category : 'Fitness',
        image : 'https://media.istockphoto.com/photos/inspired-indian-man-doing-yoga-asanas-in-city-park-picture-id956402998?k=20&m=956402998&s=612x612&w=0&h=0qH8BvXXKBMlQQ3J4jL03IILcnxPSOZXW0NyGfjsEns=',
        title : 'Fitness-7',
        about : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Date : '9 jan 2022'
    },
    ////////////////------movies----------------
    {
        id : 22,
        category : 'Hollywood',
        image : 'https://cdn.bollywoodbubble.com/wp-content/uploads/2021/05/KGF-Chapter-2-runtime-1.jpg',
        title : 'Hollywood',
        about : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Date : '9 jan 2022'
    },
    {
        id : 23,
        category : 'Hollywood',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfaf4t7_nMVQ1yEfHfHs_7ubl1mgesx1DDTw&usqp=CAU',
        title : 'Hollywood',
        about : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Date : '9 jan 2022'
    },
    {
        id : 24,
        category : 'Hollywood',
        type : 'Story',
        image : 'https://english.sakshi.com/sites/default/files/styles/canvas/public/article_images/2022/08/19/karthikeya%202-1660886658.jpg?itok=w-MMoQEx',
        title : 'Hollywood',
        about : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Date : '9 jan 2022'
    },
    {
        id : 25,
        category : 'Hollywood',
        image : 'https://m.media-amazon.com/images/M/MV5BZDEwNTQxOTEtY2U0NC00YzU4LThkMjQtNTkzY2FmNDllODJjXkEyXkFqcGdeQXVyMTUzNDQ4Mzkw._V1_.jpg',
        title : 'Hollywood',
        about : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Date : '9 jan 2022'
    },
    {
        id : 26,
        category : 'Hollywood',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkzcC0SmhIAjtwRqIsAJvWyvs-_VY6Bpql-A&usqp=CAU',
        title : 'Hollywood',
        about : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Date : '9 jan 2022'
    },
    {
        id : 27,
        category : 'Hollywood',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH34klq7wIgqEou9l44HrRcM1rZWKUnAH_ow&usqp=CAU',
        title : 'Hollywood',
        about : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Date : '9 jan 2022'
    },
    {
        id : 28,
        category : 'Hollywood',
        image : 'https://i0.wp.com/ramenswag.com/wp-content/uploads/2019/02/Aquaman-Movie-Poster-2018_-HD-Movies_-4k-Wallpapers_-Images-....jpg?fit=2764%2C1554&ssl=1',
        title : 'Hollywood',
        about : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Date : '9 jan 2022'
    },
    ///-----------Technology---------------------------------------------
    {
        id : 29,
        category : 'Technology',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuVBYu4R8XwDZX9EOI0NHVQo8HM6MMAAwv0M6q7JIO2m-C1Pkek-4wjUMb_JmCl2pqE4I&usqp=CAU',
        title : 'Technology',
        about : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Date : '9 jan 2022'
    },
    {
        id : 30,
        category : 'Technology',
        type : 'Story',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlc5oYAwMkzfGKUjhWbNMsPlu6t2kzg59WbQ&usqp=CAU',
        title : 'Technology',
        about : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Date : '9 jan 2022'
    },
    {
        id : 31,
        category : 'Technology',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXs4fX1rlqnXaEEJEEKpJ3nUb52T7bwWkZ8g&usqp=CAU',
        title : 'Technology',
        about : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Date : '9 jan 2022'
    },
    {
        id : 32,
        category : 'Technology',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSotEF7NqZ_T-zq4mADD9NZxP0zkTZ3SLbp8A&usqp=CAU',
        title : 'Technology',
        about : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Date : '9 jan 2022'
    },
    {
        id : 33,
        category : 'Technology',
        type : 'Artical',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy42lV3VtbKvmtZHe4hK9naI4_lIqIHdI2Aw&usqp=CAU',
        title : 'Technology',
        about : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Date : '9 jan 2022'
    },
    {
        id : 34,
        category : 'Technology',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqpR6Mb28nwPWwe_NEvmU-fqMNNaNC9ci5jg&usqp=CAU',
        title : 'Technology',
        about : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Date : '9 jan 2022'
    },
    {
        id : 35,
        category : 'Technology',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKfqr4xpsEYeWdWKyAkWsgzqe7c3ytOMcvYQ&usqp=CAU',
        title : 'Technology',
        about : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Date : '9 jan 2022'
    },
])
  
  return (
    <div>
        <store.Provider value= {[data,SetData]}>
        {props.children}
      
        </store.Provider>
    </div>
  )
}

export default Data;