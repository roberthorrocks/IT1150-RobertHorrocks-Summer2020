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

function increment()
{ 
    var y = 10;//local scope - resets y everytime function is called
    globalX = globalX+10;//can add any number to itself
    //y = y+10;
    y+=10;//same as y = y+10;
    alert("x="+globalX + "y="+y); 

}

/* JS statements
Conditional statements:
If statement
Switch statement
*/

function compare()
{
    //var charlie = 120;
    //var john = 120;
   
    var charlie = prompt("Enter charlie's height");
    var john = prompt("Enter john's height");

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

function IsTropical(fruit)//fruit is a variable and is an input parameter
{
    var isTropical = false; //boolean variable: True or False

    switch(fruit)
    {
        case "banana":
            isTropical = true;
            break;

        case "papaya":
            isTropical = true;
            break;

        case "tomato":
            isTropical = false;
            break;

        case "mango":
            isTropical = true;
            break;

        case "watermelon":
            isTropical = true;
            break;

        default:
            isTropical = false;            
    }

    alert("Is "+ fruit+ " tropical?"+ isTropical );

}

/*
Loops:
For loop
While loop
Do while loop
Break
*/

function Repeat( message )
{
    var counter = 0;
    console.log("While loop:");
    while (counter < 5)
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    }

    counter = 0;
    console.log("Do - While loop:");
    do 
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    } while (counter < 5);

    console.log("For loop:");
    /************************************************* */
    for(var counter=0; counter < 5; counter++)
    {
        console.log(message);
    }
}

function CountMultiplesFn()
{
    var x = prompt("Enter the first number");
    CountMultiples(x);
    var y = prompt("Enter the second number");
    CountMultiples(y);
    var z = prompt("Enter the third number");
    CountMultiples(z);
}
function CountMultiples(num)
{
    var totalMultiples = 0;

    for(var i=1;i<=100;i++)
    {
        if (i % num == 0)//This means it is a multiple
            totalMultiples++;
    }
    console.log("Total multiples of "+ num + " = "+totalMultiples);
}
function DisplayTriangleWithNRows(rows)
{
    var num = prompt("Enter the number of rows for your triangle");
    
    DisplayTriangle(num);
    var strRows = "";

    for(var i=1; i<+ rows; i++)
    {

        for(var j=1; j<= rows; j++)
        {
            strRows = strRows +"*" ;

        }

        console.log(strRows);
    }
}
function DisplayTriangle(num)
{
    var strRow="";
    var totalStars=0;
    for (var i=1;i<=num;i++){        
        strRow = ""      ;//Reset strRow
        for (var j=1; j<=i;j++){
            strRow = strRow + "*";
            totalStars++;
        }        
        //Now we have a row. Lets display the row
        console.log(strRow);     
    }
    return totalStars;
}

function CountStarsInTriangle()
{
    var num = prompt("Enter the number of rows for your triangle");
    var total = DisplayTriangle(num);
    console.log("Total starts in a triangle with "+ num + " rows = "+ total);
}


function Homework1()
{
            /*Calculate the sum of odd numbers between 5 and 150 (using "for" loop) 
            Use the % operator to decide if a number is odd or even. 
            (X % 2) gives the remainder when divided by 2.*/
            
            var y = 0;
            for(var n = 5; n < 150; n++) 
            {
                
                
                if( n % 2 )
                {
                y = y + n;
                }
                


            }

            console.log("The sum of odd numbers between 5 and 150 is: " + y);
}

function Homework2()
{
            /*Using switch statement, assign a letter grade for a given score
            Prompt the user to enter a score and display letter grade in an alert box
            Below 70 is F; 70-79 is C; 80-89 is B and 90 and above is A)           
            */

           var num = prompt("Enter a score to see your grade");
           var grade = "X";

           switch(true)
           {
               case num <= 69:
                   grade = "F";
                   break;
       
               case num >= 70 && num <=79:
                    grade = "C";
                   break;

                case num >= 80 && num <=89:
                    grade = "B";
                   break;
       
               case (num >= 90):
                   grade = "A";
                   break;
       
               default:
                   //grade = false;            
           }
       
           alert("Your grade is "+ grade );

}

function Homework3()
{
            /*Prompt the user to enter a number
            Display the multiples of a number between 1 and 200(use any loop)           
            Also display the total number of multiples of the number also*/
            
           var num = prompt("Enter a number between 1 and 200");
            
            var counter1 = 0;

            for(var i=1;i<=200;i++)
            {
                if (i % num == 0)//This means it is a multiple
                {
                    console.log(i);
                    counter1++;
                    
                }     
                    
            }
            
            console.log("Total multiples of "+ num + " = "+counter1);
           
           

}


function DisplayABTriangle(num)
{
    var strRow="";
    var totalStars=0;
    for (var i=1;i<=num;i++){        
        strRow = ""      ;//Reset strRow
        for (var j=1; j<=i;j++)
        {
            //if number of rows is 1, row = "A"
            //if number of rows is 2, row = "A" + "B"
            //row is number of sets of As and Bs
            if(num = 1)
            { 
                strRow = "A";
            }
            else if (num = 2)
            {

                strRow = "A" + "B"
            }
            
            else if (num > 2 && num % 2 == 0)
            {
                strRow = "ABA";
            }

            else (num > 2)
            {

                strRow = "ABAB";
            }
            strRow = strRow + "*";
            totalStars++;
        }        
        //Now we have a row. Lets display the row
        console.log(strRow);     
    }
    return totalStars;
}

function CountStarsInABTriangle()
{
    var num = prompt("Enter the number of rows for your triangle");
    var total = DisplayABTriangle(num);
    console.log("Total stars in a triangle with "+ num + " rows = "+ total);
}

function Homework4()
{
            /*Prompt the user to enter the rows for the triangle
            Print a triangle made up of A and B as many rows as I say (pass the rows as a parameter to the function)
            first row will be A; second row will be AB; third row will be ABA; fourth row will be ABAB..etc*/

            var num = prompt("Enter the number of rows for your triangle");
            DisplayABTriangle(num);
            

}

function Homework5()
{
            /*Prompt the user to enter the rows for the triangle
            In the above triangle, count the number of As and number of Bs*/
            CountStarsInABTriangle();

}