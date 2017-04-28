$(document).ready(function () {
    setInterval(function () {
        $.get("api/ranking", function (data) {
            // Update data-attributes and badge with new ranking
            $('#ranking li').each(function () {
                var candidate = $(this).attr('data-candidate');
                var newPosition = data.indexOf(candidate);

                $(this).attr('data-position', newPosition);
                $('.badge', this).html(newPosition + 1);
            });

            // Animate candidates to new positions based on ranking

        });
    }, 1000);
});