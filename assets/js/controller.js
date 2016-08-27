var app = angular.module('app', []);

app.controller("controller", function($scope){
          
    $scope.obj = newObj();
    $scope.lista = [];
    
    $scope.totalSaque = 0;
    $scope.totalDep = 0;
    $scope.saldo = 0;
    
    
    $scope.saveObj = function (obj){
                
        $scope.lista.push(obj);
        $scope.obj = newObj();
        
        $scope.frm.$setUntouched();
        $scope.frm.$setPristine();
        
        $scope.updateSaldo();
        
    } 
      
    $scope.updateSaldo = function (){                       
       //console.log("Ma oê");
    
        for(var i=0;i < $scope.lista.length;i++){
            
            if($scope.lista[i].tipo == "Saque"){
                $scope.totalSaque += parseFloat($scope.lista[i].valor);
            }else{
                $scope.totalDep += parseFloat($scope.lista[i].valor);
            }   
        }        
        
        $scope.saldo = $scope.totalDep - $scope.totalSaque;            
        $scope.totalDep = 0;
        $scope.totalSaque = 0;
                
    }       
    
    $scope.removeItem = function (index){       
       //console.log("Ma oê");
        
       $scope.lista.splice(index,1);        
       $scope.updateSaldo();        
    }
    
   
});

function newObj(){        
    return{
        tipo: "Depósito",
        valor: ""      
        
    }    
}
