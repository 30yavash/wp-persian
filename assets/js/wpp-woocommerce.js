jQuery(document).ready(function() {


    jQuery( "<input name='jalali_order_date' class='jalali-date-picker' type='text'>" ).insertAfter( "input[name='order_date']" );


    var old_textbox=jQuery("input[name='order_date']");


    var new_textbox = jQuery( '.jalali-date-picker' );


    old_textbox.removeAttr('pattern');
    old_textbox.removeAttr('class');
    //old_textbox.css('display','none');
    old_textbox.removeAttr('pattern');

    var jdf = new jDateFunctions();
    //console.log(jdf.getPCalendarDate(jdf.getJulianDay(new Date(old_textbox.val()))).toString("YYYY-0M-0D"));

    new_textbox.val(jdf.getPCalendarDate(jdf.getJulianDay(new Date(old_textbox.val()))).toString("YYYY-0M-0D"));


    new_textbox.persianDatepicker({
        formatDate: "YYYY-0M-0D",
        onSelect: function () {
            var jdate=new_textbox.val();

            var arrdate=jdate.split('-');
            var pd = new persianDate();
            pd.year = parseInt(arrdate[0]);
            pd.month = parseInt(arrdate[1]);
            pd.date = parseInt(arrdate[2]);
            var jdf = new jDateFunctions();

            old_textbox.val(jdf.getGDate(pd)._toString("YYYY-0M-0D"));
        },

    });


});// ready Document