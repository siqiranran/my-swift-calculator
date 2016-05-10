$(function() {

    //alert("hello");

    $("#slider1").slider();

    $("#button1, #button2, #button3").button();
    $("#button4").button();

    $("#dialog1").dialog({
        autoOpen: false,
        buttons: {
            OK: function() { $(this).dialog("close"); }
        }
    });
    $("#launcher").click(function() {
        $("#dialog1").dialog("open");

    });

    $("#datepicker1").datepicker();

    var searchDBString = [
        "Meat",
        "Chicken",
        "Fish",
        "Pork",
        "Beef",
        "Lamp",
        "Lamb",
    ];
    $("#autocomplete1").autocomplete({
        source: searchDBString,

    });

    $("#accordion1").accordion({
        collapsible: true
    });

    $("#menu1").menu();


    //Justin's part

    var lunchboxReset = $('.lunchbox').html();
    var nfReset = $('.nf').html();

    $("#accordion").accordion({
        disabled: false,
        active: true
    });

    function bindings() {
        $(".lunchbox ol").droppable({
            activeClass: "lunchbox--active",
            hoverClass: "lunchbox--hover",
            accept: ":not(.ui-sortable-helper)",
            drop: function(event, ui) {
                $(this).find(".placeholder").remove();
                var count = $(this).find('li:has(img)').length + 1;
                if (count > 10) {
                    ui.draggable.draggable('option', 'revert', true);
                    $(".diet-plate__container li").disableSelection();
                    alert('You have too much food!\n\n Please behave yourself.');
                    return;
                } else {
                    $("<li></li>").html(ui.draggable.html()).appendTo(this);
                    ui.draggable.draggable('option', 'revert', false);
                    $(".diet-plate__container li").draggable();
                }
                var calories = $(this).find('img').get().reduce(
                    function(a, b) {
                        return a + $(b).data('calories');
                    }, 0);
                var totalFat = $(this).find('img').get().reduce(
                    function(a, b) {
                        return a + $(b).data('total-fat');
                    }, 0);
                var cholesterol = $(this).find('img').get().reduce(
                    function(a, b) {
                        return a + $(b).data('cholesterol');
                    }, 0);
                var sodium = $(this).find('img').get().reduce(
                    function(a, b) {
                        return a + $(b).data('sodium');
                    }, 0);
                var dietaryFiber = $(this).find('img').get().reduce(
                    function(a, b) {
                        return a + $(b).data('dietary-fiber');
                    }, 0);
                var sugar = $(this).find('img').get().reduce(
                    function(a, b) {
                        return a + $(b).data('sugar');
                    }, 0);
                var protein = $(this).find('img').get().reduce(
                    function(a, b) {
                        return a + $(b).data('protein');
                    }, 0);
                console.log("A total of " + calories + " calories.");
                $('#value--calories').empty().append(calories);
                $('#value--total-fat').empty().append(totalFat);
                $('#value--cholesterol').empty().append(cholesterol);
                $('#value--sodium').empty().append(sodium);
                $('#value--dietary-fiber').empty().append(dietaryFiber);
                $('#value--sugar').empty().append(sugar);
                $('#value--protein').empty().append(protein);

            }
        }).sortable({
            items: "li:not(.placeholder)",
            sort: function() {
                $(this).removeClass("lunchbox--active");

            },
        });
        $(this).find(".placeholder").disableSelection();
        $(".diet-plate__container").find('li').draggable({
            appendTo: "body",
            accept: ".lunchbox",
            helper: "clone",
            scroll: false,
            cursor: 'move',
            connectWith: ".placeholder",
        });
    }
    bindings();

    $('#steak-tooltip').tooltipster({
        content: $('<p><strong>Steak</strong></p><p>serving size: 1oz</p></p><p>Calories: 10<br>Total Fat: 10<br>Cholesterol: 10<br>Sodium: 10<br>Dietary Fiber: 10<br>Sugar: 10<br>Protein: 10</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#sausage-tooltip').tooltipster({
        content: $('<p"><strong>Sausage</strong></p><p>serving size: 1oz</p></p><p>Calories: 10<br>Total Fat: 10<br>Cholesterol: 10<br>Sodium: 10<br>Dietary Fiber: 10<br>Sugar: 10<br>Protein: 10</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#lamb-tooltip').tooltipster({
        content: $('<p"><strong>Lamb</strong></p><p>serving size: 1oz</p></p><p>Calories: 10<br>Total Fat: 10<br>Cholesterol: 10<br>Sodium: 10<br>Dietary Fiber: 10<br>Sugar: 10<br>Protein: 10</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });

    $('#shrimp-tooltip').tooltipster({
        content: $('<p"><strong>Shrimp</strong></p><p>serving size: 1oz</p></p><p>Calories: 10<br>Total Fat: 10<br>Cholesterol: 10<br>Sodium: 10<br>Dietary Fiber: 10<br>Sugar: 10<br>Protein: 10</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#fish-tooltip').tooltipster({
        content: $('<p"><strong>Fish</strong></p><p>serving size: 1oz</p></p><p>Calories: 10<br>Total Fat: 10<br>Cholesterol: 10<br>Sodium: 10<br>Dietary Fiber: 10<br>Sugar: 10<br>Protein: 10</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#salmon-tooltip').tooltipster({
        content: $('<p"><strong>Salmon</strong></p><p>serving size: 1oz</p></p><p>Calories: 10<br>Total Fat: 10<br>Cholesterol: 10<br>Sodium: 10<br>Dietary Fiber: 10<br>Sugar: 10<br>Protein: 10</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#drumstick-tooltip').tooltipster({
        content: $('<p"><strong>Chicken Drum Stick</strong></p><p>serving size: 1oz</p></p><p>Calories: 10<br>Total Fat: 10<br>Cholesterol: 10<br>Sodium: 10<br>Dietary Fiber: 10<br>Sugar: 10<br>Protein: 10</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#friedChicken-tooltip').tooltipster({
        content: $('<p"><strong>Fried Chicken</strong></p><p>serving size: 1oz</p></p><p>Calories: 10<br>Total Fat: 10<br>Cholesterol: 10<br>Sodium: 10<br>Dietary Fiber: 10<br>Sugar: 10<br>Protein: 10</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#roastDuck-tooltip').tooltipster({
        content: $('<p"><strong>Roast Duck</strong></p><p>serving size: 1oz</p></p><p>Calories: 10<br>Total Fat: 10<br>Cholesterol: 10<br>Sodium: 10<br>Dietary Fiber: 10<br>Sugar: 10<br>Protein: 10</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#apple-tooltip').tooltipster({
        content: $('<p"><strong>Apple</strong></p><p>serving size: 1oz</p></p><p>Calories: 10<br>Total Fat: 10<br>Cholesterol: 10<br>Sodium: 10<br>Dietary Fiber: 10<br>Sugar: 10<br>Protein: 10</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#avocado-tooltip').tooltipster({
        content: $('<p"><strong>Avocado</strong></p><p>serving size: 1oz</p></p><p>Calories: 10<br>Total Fat: 10<br>Cholesterol: 10<br>Sodium: 10<br>Dietary Fiber: 10<br>Sugar: 10<br>Protein: 10</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#banana-tooltip').tooltipster({
        content: $('<p"><strong>Banana</strong></p><p>serving size: 1oz</p></p><p>Calories: 10<br>Total Fat: 10<br>Cholesterol: 10<br>Sodium: 10<br>Dietary Fiber: 10<br>Sugar: 10<br>Protein: 10</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#brocolli-tooltip').tooltipster({
        content: $('<p"><strong>Brocolli</strong></p><p>serving size: 1oz</p></p><p>Calories: 10<br>Total Fat: 10<br>Cholesterol: 10<br>Sodium: 10<br>Dietary Fiber: 10<br>Sugar: 10<br>Protein: 10</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#eggplant-tooltip').tooltipster({
        content: $('<p"><strong>Eggplant</strong></p><p>serving size: 1oz</p></p><p>Calories: 10<br>Total Fat: 10<br>Cholesterol: 10<br>Sodium: 10<br>Dietary Fiber: 10<br>Sugar: 10<br>Protein: 10</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#lettuce-tooltip').tooltipster({
        content: $('<p"><strong>Lettuce</strong></p><p>serving size: 1oz</p></p><p>Calories: 10<br>Total Fat: 10<br>Cholesterol: 10<br>Sodium: 10<br>Dietary Fiber: 10<br>Sugar: 10<br>Protein: 10</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#bread-tooltip').tooltipster({
        content: $('<p"><strong>Bread</strong></p><p>serving size: 1oz</p></p><p>Calories: 10<br>Total Fat: 10<br>Cholesterol: 10<br>Sodium: 10<br>Dietary Fiber: 10<br>Sugar: 10<br>Protein: 10</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#pasta-tooltip').tooltipster({
        content: $('<p"><strong>Pasta</strong></p><p>serving size: 1oz</p></p><p>Calories: 10<br>Total Fat: 10<br>Cholesterol: 10<br>Sodium: 10<br>Dietary Fiber: 10<br>Sugar: 10<br>Protein: 10</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#rice-tooltip').tooltipster({
        content: $('<p"><strong>Rice</strong></p><p>serving size: 1oz</p></p><p>Calories: 10<br>Total Fat: 10<br>Cholesterol: 10<br>Sodium: 10<br>Dietary Fiber: 10<br>Sugar: 10<br>Protein: 10</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('.reset-btn').click(function() {
        $('.lunchbox').html(lunchboxReset);
        $('.nf').html(nfReset);
        bindings();
    });

    $(document).on('click', '.x-close', function() {

        $(this).parent().remove();

        // var calories = $(".ui-droppable").find('img').data('calories').toArray().reduce(
        //   function(prev, curr) {
        //     return prev + curr;
        //   });

        var calories = $(".ui-droppable").find('img').get().reduce(
            function(a, b) {
                return a + $(b).data('calories');
            }, 0);
        var totalFat = $(".ui-droppable").find('img').get().reduce(
            function(a, b) {
                return a + $(b).data('total-fat');
            }, 0);
        var cholesterol = $(".ui-droppable").find('img').get().reduce(
            function(a, b) {
                return a + $(b).data('cholesterol');
            }, 0);
        var sodium = $(".ui-droppable").find('img').get().reduce(
            function(a, b) {
                return a + $(b).data('sodium');
            }, 0);
        var dietaryFiber = $(".ui-droppable").find('img').get().reduce(
            function(a, b) {
                return a + $(b).data('dietary-fiber');
            }, 0);
        var sugar = $(".ui-droppable").find('img').get().reduce(
            function(a, b) {
                return a + $(b).data('sugar');
            }, 0);
        var protein = $(".ui-droppable").find('img').get().reduce(
            function(a, b) {
                return a + $(b).data('protein');
            }, 0);
        console.log("A total of " + calories + " calories.");
        $('#value--calories').empty().append(calories);
        $('#value--total-fat').empty().append(totalFat);
        $('#value--cholesterol').empty().append(cholesterol);
        $('#value--sodium').empty().append(sodium);
        $('#value--dietary-fiber').empty().append(dietaryFiber);
        $('#value--sugar').empty().append(sugar);
        $('#value--protein').empty().append(protein);

    });

});
