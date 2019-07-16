$(document).ready(function($) {
    $('.tab_content').hide();
    $('.tab_content:first').show();
    $('.tabs li:first').addClass('active');
    $('.tabs li').click(function(event) {
      $('.tabs li').removeClass('active');
      $(this).addClass('active');
      $('.tab_content').hide();
  
      var selectTab = $(this).find('a').attr("href");
  
      $(selectTab).fadeIn();
    });
  });
  
  //values auto bottom for general

  $(function(){
    $(".makeEditable").click(function(){
        $('textarea').removeAttr("readonly");
    });

    $('#fname').change(function() {
      let inputValue = $(this).val();
      let letter__general = $('#letter__general');

      letter__general.val(letter__general.val() + `\nFirst Name: ${inputValue}`)
    })

    $('#lname').change(function() {
      let inputValue = $(this).val();
      let letter__general = $('#letter__general');

      letter__general.val(letter__general.val() + `\nLast Name: ${inputValue}`)
    })

    $('#email').change(function() {
      let inputValue = $(this).val();
      let letter__general = $('#letter__general');

      letter__general.val(letter__general.val() + `\nEmail: ${inputValue}`)
    })

    $('#phone').change(function() {
      let inputValue = $(this).val();
      let letter__general = $('#letter__general');

      letter__general.val(letter__general.val() + `\nPhone: ${inputValue}`)
    })
   
    $('#addr1').change(function() {
      let inputValue = $(this).val();
      let letter__general = $('#letter__general');

      letter__general.val(letter__general.val() + `\nAddress: ${inputValue}`)
    })

    $('#addr2').change(function() {
      let inputValue = $(this).val();
      let letter__general = $('#letter__general');

      letter__general.val(letter__general.val() + `\nAddress Line 2: ${inputValue}`)
    })

    $('#city').change(function() {
      let inputValue = $(this).val();
      let letter__general = $('#letter__general');

      letter__general.val(letter__general.val() + `\nCity: ${inputValue}`)
    })

    $('#state').change(function() {
      let inputValue = $(this).val();
      let letter__general = $('#letter__general');

      letter__general.val(letter__general.val() + `\nState: ${inputValue}`)
    })

    $('#zip').change(function() {
      let inputValue = $(this).val();
      let letter__general = $('#letter__general');

      letter__general.val(letter__general.val() + `\nZip Code: ${inputValue}`)
    })

});

//auto bottom grads

$(function(){
  $(".makeEditable").click(function(){
      $('textarea').removeAttr("readonly");
  });

  $('#fname').change(function() {
    let inputValue = $(this).val();
    let letter__grads = $('#letter__grads');

    letter__grads.val(letter__grads.val() + `\nFirst Name: ${inputValue}`)
  })

  $('#lname').change(function() {
    let inputValue = $(this).val();
    let letter__grads = $('#letter__grads');

    letter__grads.val(letter__grads.val() + `\nLast Name: ${inputValue}`)
  })

  $('#email').change(function() {
    let inputValue = $(this).val();
    let letter__grads = $('#letter__grads');

    letter__grads.val(letter__grads.val() + `\nEmail: ${inputValue}`)
  })

  $('#phone').change(function() {
    let inputValue = $(this).val();
    let letter__grads = $('#letter__grads');

    letter__grads.val(letter__grads.val() + `\nPhone: ${inputValue}`)
  })
 
  $('#addr1').change(function() {
    let inputValue = $(this).val();
    let letter__grads = $('#letter__grads');

    letter__grads.val(letter__grads.val() + `\nAddress: ${inputValue}`)
  })

  $('#addr2').change(function() {
    let inputValue = $(this).val();
    let letter__grads = $('#letter__grads');

    letter__grads.val(letter__grads.val() + `\nAddress Line 2: ${inputValue}`)
  })

  $('#city').change(function() {
    let inputValue = $(this).val();
    let letter__grads = $('#letter__grads');

    letter__grads.val(letter__grads.val() + `\nCity: ${inputValue}`)
  })

  $('#state').change(function() {
    let inputValue = $(this).val();
    let letter__grads = $('#letter__grads');

    letter__grads.val(letter__grads.val() + `\nState: ${inputValue}`)
  })

  $('#zip').change(function() {
    let inputValue = $(this).val();
    let letter__grads = $('#letter__grads');

    letter__grads.val(letter__grads.val() + `\nZip Code: ${inputValue}`)
  })

});

//auto bottom parents

$(function(){
  $(".makeEditable").click(function(){
      $('textarea').removeAttr("readonly");
  });

  $('#fname').change(function() {
    let inputValue = $(this).val();
    let letter__parents = $('#letter__parents');

    letter__parents.val(letter__parents.val() + `\nFirst Name: ${inputValue}`)
  })

  $('#lname').change(function() {
    let inputValue = $(this).val();
    let letter__parents = $('#letter__parents');

    letter__parents.val(letter__parents.val() + `\nLast Name: ${inputValue}`)
  })

  $('#email').change(function() {
    let inputValue = $(this).val();
    let letter__parents = $('#letter__parents');

    letter__parents.val(letter__parents.val() + `\nEmail: ${inputValue}`)
  })

  $('#phone').change(function() {
    let inputValue = $(this).val();
    let letter__parents = $('#letter__parents');

    letter__parents.val(letter__parents.val() + `\nPhone: ${inputValue}`)
  })
 
  $('#addr1').change(function() {
    let inputValue = $(this).val();
    let letter__parents = $('#letter__parents');

    letter__parents.val(letter__parents.val() + `\nAddress: ${inputValue}`)
  })

  $('#addr2').change(function() {
    let inputValue = $(this).val();
    let letter__parents = $('#letter__parents');

    letter__parents.val(letter__parents.val() + `\nAddress Line 2: ${inputValue}`)
  })

  $('#city').change(function() {
    let inputValue = $(this).val();
    let letter__parents = $('#letter__parents');

    letter__parents.val(letter__parents.val() + `\nCity: ${inputValue}`)
  })

  $('#state').change(function() {
    let inputValue = $(this).val();
    let letter__parents = $('#letter__parents');

    letter__parents.val(letter__parents.val() + `\nState: ${inputValue}`)
  })

  $('#zip').change(function() {
    let inputValue = $(this).val();
    let letter__parents = $('#letter__parents');

    letter__parents.val(letter__parents.val() + `\nZip Code: ${inputValue}`)
  })

});


//server
(function() {

  function validateHuman(honeypot) {
    if (honeypot) {  //if hidden form filled up
      console.log("Robot Detected!");
      return true;
    } else {
      console.log("Welcome Human!");
    }
  }

  // get all data in form and return object
  function getFormData(form) {
    var elements = form.elements;
    var honeypot;

    var fields = Object.keys(elements).filter(function(k) {
      if (elements[k].name === "honeypot") {
        honeypot = elements[k].value;
        return false;
      }
      return true;
    }).map(function(k) {
      if(elements[k].name !== undefined) {
        return elements[k].name;
      // special case for Edge's html collection
      }else if(elements[k].length > 0){
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });

    var formData = {};
    fields.forEach(function(name){
      var element = elements[name];
      
      // singular form elements just have one value
      formData[name] = element.value;

      // when our element has multiple items, get their values
      if (element.length) {
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(', ');
      }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    formData.formGoogleSend
      = form.dataset.email || ""; // no email by default

    return {data: formData, honeypot};
  }

  function handleFormSubmit(event) {  // handles form submit without any jquery
    event.preventDefault();           // we are submitting via xhr below
    var form = event.target;
    var formData = getFormData(form);
    var data = formData.data;

    // If a honeypot field is filled, assume it was done so by a spam bot.
    if (formData.honeypot) {
      return false;
    }

    disableAllButtons(form);
    var url = form.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        form.reset();
        var formElements = form.querySelector(".form-elements")
        if (formElements) {
          formElements.style.display = "none"; // hide form
        }
        var thankYouMessage = form.querySelector(".thankyou_message");
        if (thankYouMessage) {
          thankYouMessage.style.display = "block";
        }
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          alert('Form Submitted')
        } else {
          alert('Error submitting form. Please click ok to try again. You may have to click twice.')
        }
        return;
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    xhr.send(encoded);
  }
  
  function loaded() {
    console.log("Contact form submission handler loaded successfully.");
    // bind to the submit event of our form
    var forms = document.querySelectorAll("form.gform");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit, false);
    }
  };
  document.addEventListener("DOMContentLoaded", loaded, false);

  function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
})();

//get value of textarea
$(document).ready(function(){
        $("beep").click(function(){
            var comment = $.trim($("#comment").val());
            if(comment != ""){
                // Show alert dialog if value is not blank
                alert(comment);
            }
        });
        
    });
    

/*thank you page

$(function(){
  document
      .getElementById("myBtn")
      .addEventListener("click", function(){
      redirect(this.getAttribute("data-page"));        
  });
  
  $('button:nth-child(1)')
      .click(function(){
      redirect($(this).attr('data-page'));
  });
})

function redirect(url){
  console.log(url);
  window.location = url;
}*/


//thank you redirect

// function pageRedirect() {
//   window.location.href = "thankyou.html";
// }

// function submitForm() {
//   $("#supportersFrm").submit(function() {
//     alert('submitted')
//   })
// }

// $(document).ready(function) {
//   $('.send.beep').click(function) {
//     alert('test')
//   }
// }

// let supportersForm =;

// $(document).ready(function() {
//   $("#supportersFrm").submit(function() {
//     alert('test')
//   })
// })

// $("#supportersFrm").submit(function( event ) {
//   alert( "Handler for .submit() called." );
//   event.preventDefault();
// });

// $(document).ready(function() {
//   $( "#supportersFrm" ).submit(function( event ) {
//     alert( "Handler for .submit() called." );
//     event.preventDefault();
//   });
// })
