const PaymentDetail=(arrays)=>{
var resp=[];
    var groupBy = function(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      };
      var groupByEmployee=groupBy(arrays[0], 'EmployeeId')
     var EmpIds= Object.keys(groupByEmployee)
     for(var i=0;i<EmpIds.length;i++){
         console.log(EmpIds[i]);
         console.log( groupByEmployee[EmpIds[i]]);
         var taxs=arrays[1].filter(x=>x.EmployeeId==Number(EmpIds[i]));
         console.log(taxs)
         resp.push({Payment:groupByEmployee[EmpIds[i]],Tax:taxs})
    
     }
     return resp;

}

module.exports=PaymentDetail;