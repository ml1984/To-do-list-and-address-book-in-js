$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address extra-new-address">' +
      '<div class="form-group">' +
        '<label for="new-street">Street</label>' +
        '<input type="text" class="form-control new-street">' +
        '</div>' +
        '<div class="form-group">' +
          '<label for="new-city">City</label>' +
          '<input type="text" class="form-control new-city">' +
          '</div>' +
          '<div class="form-group">' +
            '<label for="new-state">State</label>' +
            '<input type="text" class="form-control new-state">' +
            '</div>' +
            '</div>');

                });
          // add phone
          $("#add-phone").click(function() {
            $("#new-phone-numbers").append('<div class="new-phones">' +
              '<div class="form-group">' +
                '<label for="new-phone">Phone Number</label>' +
                '<input type="text" class="form-control new-phone">' +
                '</div>'  +
                '</div>');

                  });

                  //add email
            $("#add-email").click(function() {
              $("#new-email-addresses").append('<div class="new-emails">' +
                '<div class="form-group">' +
                  '<label for="new-email">Email Address</label>' +
                  '<input type="text" class="form-control new-email">' +
                  '</div>'  +
                  '</div>');

                  });


  $("form#new-contact").submit(function(event) {
    event.preventDefault();
      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();


      var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, addresses: [], phones: [], emails: [] };

      $(".new-address").each(function() {
          var inputtedStreet = $(this).find("input.new-street").val();
          var inputtedCity = $(this).find("input.new-city").val();
          var inputtedState = $(this).find("input.new-state").val();

          var newAddress = { street: inputtedStreet, city: inputtedCity, state: inputtedState };
          newContact.addresses.push(newAddress);
        });
      $(".new-phones").each(function() {
            var inputtedPhone = $(this).find("input.new-phone").val();
            var newPhone = { phone_number: inputtedPhone };
            newContact.phones.push(newPhone);
        });
      $(".new-emails").each(function() {
              var inputtedEmail = $(this).find("input.new-email").val();
              var newEmail= { e_address: inputtedEmail };
              newContact.emails.push(newEmail);
        });


      $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");



          $(".contact").last().click(function() {
            $("#show-contact").show();
            $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);
            $("ul#addresses").text("");
            newContact.addresses.forEach(function(address) {
            $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " + address.state + "</li>");
            // adding phone number
            $("ul#phone-list").text("");
            newContact.phones.forEach(function(phone) {
            $("ul#phone-list").append("<li>" + phone.phone_number + "</li>");
            // adding the emails
            $("ul#email-list").text("");
            newContact.emails.forEach(function(e) {
            $("ul#email-list").append("<li>" + e.e_address + "</li>");

          });
        });
      });
    });
    // $("input#new-first-name").val("");
    // $("input#new-last-name").val("");

    // $("input.new-street").val("");
    // $("input.new-city").val("");
    // $("input.new-state").val("");
    // $("input.new-phone").val("");
    // $("input.new-email").val("");
    $('#new-contact')[0].reset();
    $('.extra-new-address').remove();
    $('.new-phones').remove();
    $('.new-emails').remove();
  });
});
