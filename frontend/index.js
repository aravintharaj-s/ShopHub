
var app = angular.module('myapp', ['ngRoute']);
    app.config(function($routeProvider){
        $routeProvider
        .when('/',{
            templateUrl:'./pages/home.html',
        })
        .when('/home',{
            templateUrl:'./pages/home.html',
        })
        .when('/electronics',{
            templateUrl:'./pages/electronics.html'
        })
        .when('/automobiles',{
            templateUrl:'./pages/automobiles.html'
        })
        .when('/miscellaneous',{
            templateUrl:'./pages/miscellaneous.html'
        })
        .when('/sports',{
            templateUrl:'./pages/sports.html'
        })
        .when('/sell',{
            templateUrl:'./pages/sell.html'
        })
    })
    app.component("sellform",{
        template: 
            `<center>
            <h3>Personal Info</h3>
            <p>User Name</p> 
            <input type="text" ng-model="username"><br>
            <p>Welcome <span ng-bind="username"></span> !!</p>
            <p>Email</p>
            <input type="email" name="email" id="email"/>
            <p>Contact number</p>
            <input type="text" name="number" id="number"/>
            <p>Gender</p>
            <select value="select">
                <option>Select</option>
                <option>Female</option>
                <option>Male</option>
                <option>other</option>
            </select>
            <p>Date of Birth</p>
            <input type="date" name="dob" id="dob"/><br><br>
            <button value="Edit" class="btn">Edit</button>
            <button value="Edit" class="btn">Save</button>   
            </div>
            </center>`
       
        });
        
app.controller('ctrl', function($scope) {
    $scope.elitems=[
        {
            src:'img/phone.jpg',
            user:'Raj',
            date:'2 Years old',
            name:'Mobile',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:8000
        },
        {
            src:'img/watch.jpg',
            user:'Ais',
            date:'4 Years old',
            name:'Smart Watch',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:3000
        },
        {
            src:'img/alexa.jpg',
            user:'Seetha',
            date:'1 Years old',
            name:'Alexa',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:3000
        }
    ]
    $scope.auitems=[
        {
            src:'img/scooty.jpg',
            user:'Bhumi',
            date:'1 Years old',
            name:'Scooty',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:28000
        },
        {
            src:'img/cycle.jpg',
            user:'Kanya',
            date:'2 Years old',
            name:'Cycle',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:8000
        },
        {
            src:'img/bike.jpg',
            user:'Manoj',
            date:'9 months old',
            name:'Bike',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:78000
        }
    ]
    $scope.spitems=[
        {
            src:'img/shoe.jpg',
            user:'Bhavesh',
            date:'3 months old',
            name:'Shoe',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:800
        },
        {
            src:'img/dum.jpg',
            user:'Dinesh',
            date:'6 months old',
            name:'Dumbbell',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:900
        },
        {
            src:'img/rope.jpg',
            user:'Anirudh',
            date:'1 month old',
            name:'Jump Rope',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:200
        }
    ]
    $scope.miitems=[
        {
            src:'img/sofa.jpg',
            user:'Dhanush',
            date:'1 Year old',
            name:'Sofa set',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:8000
        },
        {
            src:'img/guitar.jpg',
            user:'Mani',
            date:'4 Months old',
            name:'Guitar',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:1000
        },
        {
            src:'img/book.jpg',
            user:'Hari',
            date:'3 month old',
            name:'Fiction Books',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:600
        }
    ]
        $scope.cart=[];
        $scope.add=function(item){
            $scope.cart.push(angular.copy(item));
        }
        $scope.clearCart = function() {
            $scope.cart.length = 0;
            
        };
        $scope.removeItem = function(item) {
            var index = $scope.cart.indexOf(item);
            $scope.cart.splice(index, 1);
        };
});
app.controller('ectrl', function($scope) {
    $scope.elitems=[
        {
            src:'img/phone.jpg',
            user:'Raj',
            date:'2 Years old',
            name:'Mobile',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:8000
        },
        {
            src:'img/watch.jpg',
            user:'Ais',
            date:'4 Years old',
            name:'Smart Watch',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:3000
        },
        {
            src:'img/alexa.jpg',
            user:'Seetha',
            date:'1 Years old',
            name:'Alexa',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:3000
        },
        {
            src:'img/tv.jpg',
            user:'Shiva',
            date:'1 Year old',
            name:'TV',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:18000
        },
        {
            src:'img/fridge.jpg',
            user:'Arunachalam',
            date:'3 months old',
            name:'Fridge',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:10000
        },
        {
            src:'img/box.jpg',
            user:'Saraswati',
            date:'1 Years old',
            name:'Iron Box',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:3000
        },
        {
            src:'img/tab.jpg',
            user:'Sankar',
            date:'2 Years old',
            name:'Tab',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:2000
        },
        {
            src:'img/toaster.jpg',
            user:'Prabhu',
            date:'3 Years old',
            name:'Bread Toaster',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:1000
        },
        {
            src:'img/mixie.jpg',
            user:'Vicky',
            date:'1 Year old',
            name:'Mixie',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:2000
        }
    ]
    $scope.cart=[];
        $scope.add=function(item){
            $scope.cart.push(angular.copy(item));
        }
        $scope.clearCart = function() {
            $scope.cart.length = 0;
        };
        $scope.removeItem = function(item) {
            var index = $scope.cart.indexOf(item);
            $scope.cart.splice(index, 1);
        };

});


app.controller('sctrl', function($scope) {
    
    $scope.spitems=[
        {
            src:'img/shoe.jpg',
            user:'Bhavesh',
            date:'3 months old',
            name:'Shoe',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:800
        },
        {
            src:'img/dum.jpg',
            user:'Dinesh',
            date:'6 months old',
            name:'Dumbbell',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:900
        },
        {
            src:'img/rope.jpg',
            user:'Anirudh',
            date:'1 month old',
            name:'Jump Rope',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:200
        },
        {
            src:'img/bat.jpg',
            user:'Dhinesh',
            date:'6 months old',
            name:'Bat',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:500
        },
        {
            src:'img/foot.jpg',
            user:'Dasari',
            date:'10 months old',
            name:'Football',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:800
        },
        {
            src:'img/volley.jpg',
            user:'Nesa',
            date:'1 Year old',
            name:'Volleyball',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:300
        },
        {
            src:'img/helmet.jpg',
            user:'Aditi',
            date:'2 Year old',
            name:'Cricket Helmet',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:700
        },
        {
            src:'img/basket.jpg',
            user:'Arun',
            date:'5 months old',
            name:'Basketball',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:200
        },
        {
            src:'img/kit.jpg',
            user:'Pradeep',
            date:'4 months old',
            name:'Kit bag',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:500
        },
        {
            src:'img/glove.jpg',
            user:'Bhavna',
            date:'6 months old',
            name:'Gloves',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:300
        },
        {
            src:'img/ball.jpg',
            user:'Ashwini',
            date:'3 months old',
            name:'Tennis Ball',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:200
        },
        {
            src:'img/rac.jpg',
            user:'Inzamam',
            date:'9 months old',
            name:'Racquet',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:300
        }
    ]
    $scope.cart=[];
        $scope.add=function(item){
            $scope.cart.push(angular.copy(item));
        }
        $scope.clearCart = function() {
            $scope.cart.length = 0;
        };
        $scope.removeItem = function(item) {
            var index = $scope.cart.indexOf(item);
            $scope.cart.splice(index, 1);
        };

});

app.controller('actrl', function($scope) {
    
    $scope.auitems=[
        {
            src:'img/scooty.jpg',
            user:'Bhumi',
            date:'1 Years old',
            name:'Scooty',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:28000
        },
        {
            src:'img/cycle.jpg',
            user:'Kanya',
            date:'2 Years old',
            name:'Cycle',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:8000
        },
        {
            src:'img/bike.jpg',
            user:'Manoj',
            date:'9 months old',
            name:'Bike',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:78000
        },
        {
            src:'img/car.jpg',
            user:'Rohit',
            date:'2 Years old',
            name:'Car',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:300000
        },
        {
            src:'img/bike2.jpg',
            user:'Raina',
            date:'4 Years old',
            name:'Bike',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:50000
        },
        {
            src:'img/cycle-1.jpg',
            user:'Dhoni',
            date:'5 Years old',
            name:'Cycle',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:3000
        },
        {
            src:'img/car1.jpg',
            user:'Virat',
            date:'1 Years old',
            name:'Car',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:700000
        },
        {
            src:'img/scooty1.jpg',
            user:'Rutu',
            date:'2 Years old',
            name:'Scooty',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:40000
        },
        {
            src:'img/cycle-1.jpg',
            user:'Nuzair',
            date:'9 months old',
            name:'Cycle',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:4000
        }
    ]
    $scope.cart=[];
        $scope.add=function(item){
            $scope.cart.push(angular.copy(item));
        }
        $scope.clearCart = function() {
            $scope.cart.length = 0;
        };
        $scope.removeItem = function(item) {
            var index = $scope.cart.indexOf(item);
            $scope.cart.splice(index, 1);
        };
});

app.controller('mctrl', function($scope) {

    $scope.miitems=[
        {
            src:'img/sofa.jpg',
            user:'Dhanush',
            date:'1 Year old',
            name:'Sofa set',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:8000
        },
        {
            src:'img/guitar.jpg',
            user:'Mani',
            date:'4 Months old',
            name:'Guitar',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:1000
        },
        {
            src:'img/book.jpg',
            user:'Hari',
            date:'3 month old',
            name:'Fiction Books',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:600
        },
        {
            src:'img/watch-1.jpg',
            user:'Simon',
            date:'6 month old',
            name:'Watch',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:600
        },
        {
            src:'img/neck.jpg',
            user:'Ashiq',
            date:'1 Year old',
            name:'Necklace',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:2000
        }
        ,
        {
            src:'img/decor.jpg',
            user:'Anto',
            date:'2 Years old',
            name:'Home Decor',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:900
        },
        {
            src:'img/almara.jpg',
            user:'Reggie',
            date:'10 month old',
            name:'Almara',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:5000
        },
        {
            src:'img/chair.jpg',
            user:'Amose',
            date:'5 month old',
            name:'Chairs',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:1000
        },
        {
            src:'img/piano.jpg',
            user:'Vishaul',
            date:'3 Year  old',
            name:'Piano',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:4000
        },
        {
            src:'img/sun.jpg',
            user:'Kiran',
            date:'3 month old',
            name:'Sunglasses',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:800
        },
        {
            src:'img/table.jpg',
            user:'Hari',
            date:'8 month old',
            name:'Table',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:9000
        },
        {
            src:'img/coolers.jpg',
            user:'Ashwath',
            date:'10 month old',
            name:'Coolers',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.',
            price:500
        },
    ]
    $scope.cart=[];
        $scope.add=function(item){
            $scope.cart.push(angular.copy(item));
        }
        $scope.clearCart = function() {
            $scope.cart.length = 0;
        };
        $scope.removeItem = function(item) {
            var index = $scope.cart.indexOf(item);
            $scope.cart.splice(index, 1);
        };

});


function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "about.txt", true);
    xhttp.send();
  }

