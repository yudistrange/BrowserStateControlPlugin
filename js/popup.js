$(document).ready(function() {
		var IP=prompt("Please enter server IP\nLeave blank to start local server");
		if (IP!=null)
  		{
  			alert("connect to server");
  		} else {
  			alert("start server");
  		}
	});


/*$(document).ready(function(){
        $("#RoleBox").dialog({
        	modal: true,	
        	buttons: {
				"Delete all items": function() {
					$( this ).dialog( "close" );
				},
				Cancel: function() {
					$( this ).dialog( "close" );
				}
			},
			containerCss: {
            	width: 550,
            	height: 500
        	}
        });
    });
*/
/*$(function() {
	( "#example" ).dialog({
			resizable: false,
			height:140,
			modal: true,
			buttons: {
				"Delete all items": function() {
					$( this ).dialog( "close" );
				},
				Cancel: function() {
					$( this ).dialog( "close" );
				}
			}
		})
});*/

/* $(document).ready(function() {
    $("#dialog").dialog({
      modal: true
      buttons: [ 
      	{ 
      		text: "Ok", click: function() { 
      			$( this ).dialog( "close" ); 
      		} 
      	} 
      ]
    });
  });
*/
/*
function showModalConfirmDialog(msg, handler) {
    button1.onclick = function(evt){
        handler(true);
    };
    button2.onclick = function(evt){
        handler(false);
    };
}
showModalConfirmDialog('Are you sure?', function (outcome) { 
    alert(outcome ? 'yes' : 'no'); 
});

*/

/*$(document).ready(function() {
	var r = confirm("Role");
	if(r==true) {
		alert("hat sala");
	} else {
		alert("bhak sala");
	}
});
*/
/*$function() {
    $( "#dialog-confirm" ).dialog({
      resizable: false,
      height:140,
      modal: true,
      buttons: {
        "Delete all items": function() {
          $( this ).dialog( "close" );
        },
        Cancel: function() {
          $( this ).dialog( "close" );
        }
      }
    });
  };
*/

/*$(document).ready( function() {
	$(".selector").dialog({
      resizable: false,
      height:140,
      modal: true,
      buttons: {
        "Delete all items": function() {
          $( this ).dialog( "close" );
        },
        Cancel: function() {
          $( this ).dialog( "close" );
        }
      }
    });
});
*/
