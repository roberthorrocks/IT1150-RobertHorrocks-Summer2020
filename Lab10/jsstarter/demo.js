//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/


console.log("console log - hello world");//log in developer tools
var globalX = 100;//global scope

function hello() //function definition
{
    alert("alert - hello world!");//popup window    
}

function add()//function definition
{
    var x = 3;
    var y = 5;
    var sum = x + y;
    alert("Sum is " + sum);
}

function substract()
{
    var a = 1000;
    var b = 100;
    var diff = a - b;
    alert("Difference is" + diff);
}

//Homework Lab- Complete Multiplication and Division functionality

function increment()
{ 
    var y = 10;//local scope - resets y everytime function is called
    globalX = globalX+10;//can add any number to itself
    //y = y+10;
    y+=10;//same as y = y+10;
    alert("x="+globalX + "y="+y); 

}

function compare()
{
    var charlie = 120;
    var john = 120;
    
    //conditional if statement
    
    if (charlie > john)
    {
        alert("Charlie is taller");
    }
    else if( charlie == john)//"=" is assignment; "==" is comparison
    {
        alert("Charlie and John are of the same height");
    }
    else
    {
        alert("John is taller");
    }
}

function multiply()//function definition
{
    var x = 25;
    var y = 42;
    var product = x * y;
    alert("Product is " + product);
}

function divide()//function definition
{
    var x = 48;
    var y = 12;
    var product = x / y;
    alert("Each child should receive this number of pencils: " + product);
}

function computemean()//function definition
{
    var x = 25;
    var y = 47;
    var m = 98;
    var n = 46;
    var p = 52;
    var mean = (x + y + m + n + p) / 5;
    alert("The mean of these numbers is: " + mean);
}

function comparenumbers()
{
    var x = 100;
    var y = 1000;
    
    //conditional if statement
    
    if (x > y)
    {
        alert("Yes");
    }
    else if( x == y)//"=" is assignment; "==" is comparison
    {
        alert("They are equal");
    }
    else
    {
        alert("No");
    }
}

function comparenumbersagain()
{
    var x = 5;
    var y = 4;
    var z = 20;
    
    //conditional if statement
    
    if ((x * y) > z)
    {
        alert("Yes");
    }
    
    else
    {
        alert("No");
    }
}