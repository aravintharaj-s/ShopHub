var app=angular.module("cartapp",[]);
app.service("msg",function(){
    this.serv_fun=function(){
        return "Your items will be delivered";
    }
})

app.controller("cctrl",function($scope,msg){
    $scope.value=false;
    $scope.myfun=function(){
        $scope.value=true;
        
        $scope.msg1=msg.serv_fun();}
    
})