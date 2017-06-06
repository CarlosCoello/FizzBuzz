$(document).ready(function() {

     $( '.clear-fizz' ).hide();

        // Count of numbers from 1 to a number from user input*//
        $('.play-fizz').on('click', function() {
          var numInput = prompt("Enter a number from 1 to 100");
          if( numInput === 'null' || numInput === 'undefined' || isNaN(numInput)){
            return $('.not-a-number').append('<p style="color:red;">Fizzbuzz only takes numbers not text, type in a number and it will work</p>');
          }

        for (i=1; i <= numInput; i++) {

          $('.not-a-number').html('');

        //* If divided by 3 an 5 with result 0 fizzbuzz*//
        if (i % 3 === 0)
        {
           if (i % 5 === 0)
           {
             $('ul').append('<li>fizz buzz</li>');
           }
           //* else if only divided by 3 with result 0 fizz*//
           else if (i % 3 === 0)
            {
            $('ul').append('<li>fizz</li>');
            }
         }
         //* else if only divided by 5 with result 0 buzz*//
         else if (i % 5 === 0)
         {
           $('ul').append('<li>buzz</li>');
         }
         //* else if not divided by 3 or 5 or 3 and 5 output count*//
         else
         {
           $('ul').append('<li>' + i + '</li>');
         }

       } //for loop closing curly brace

            $( '.play-fizz' ).hide();
            $( '.clear-fizz' ).show();

        });

    $('.clear-fizz').on('click', function(){

        $('ul').empty();
        $( '.clear-fizz' ).hide();
        $( '.play-fizz' ).show();

    });

});
