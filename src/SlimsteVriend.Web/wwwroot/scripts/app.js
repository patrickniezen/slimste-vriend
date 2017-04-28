$(document).ready(function () {
    // Fetch and sync ranking each X miliseconds
    setInterval(function () {
        $.get("api/ranking", function (data) {
            $('#ranking li').each(function () {
                var candidate = $(this).attr('data-candidate');

                var oldPosition = $(this).attr('data-rank');
                var newPosition = data.indexOf(candidate);

                // Animate candidates to new positions based on ranking if needed.
                if (oldPosition != newPosition) {
                    var elementHeight = $(this).outerHeight();
                    var deltaY = (newPosition - oldPosition) * elementHeight;
                    $(this).animate({ "top": '+=' + deltaY }, 1000);
                }

                // Update data-attributes and score with new ranking
                $(this).attr('data-rank', newPosition);
                //$('.score', this).html('40');
            });
        });
    }, 2500);
});