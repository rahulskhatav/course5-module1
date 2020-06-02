(function(){
    angular.module('lunchApp', []).controller('lunchAppController', lunchCalc);
    lunchCalc.$inject = ['$scope'];
    function lunchCalc($scope){
        $scope.text = "";
        $scope.stat = "";
        $scope.empty = 0;
        $scope.displayMessage = function(){
            var words = $scope.text.split(",");
            var len = words.length;
            if($scope.text===""){
                $scope.stat = "Please enter data first";
            }
            else if(len>3){
                $scope.stat = "Too much!";
            }
            else{
                $scope.stat = "Enjoy!";
            }
        };
        $scope.displayEmpty = function(){
            var words = $scope.text.split(",");
            $scope.empty=0;
            for(var i=0; i<words.length; i++){
                if(words[i]==="")
                    $scope.empty++;
            }
        }
    };


})();