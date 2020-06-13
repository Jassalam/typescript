class PrinterClass { 
    doPrint():void {
       console.log("doPrint() from Parent class"); 
    } 
 } 
 
 class StringPrinter extends PrinterClass { 
    doPrint():void { 
       super.doPrint() ;
       console.log("doPrint() from  StringPrinter class");
    } 
 } 
 
 var obj = new StringPrinter();
 obj.doPrint();