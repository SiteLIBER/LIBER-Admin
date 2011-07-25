/*
** Edit tag window
*/

$(function () {
    $('#edit_tag_window').jqm();
});

$(function () {
    $('ul.tags li a.edit').click(function () {
        $('#edit_tag_window').jqmShow();
    });
});

$(function () {
    $('#edit_tag_window .title_bar .close').click(function () {
        $('#edit_tag_window').jqmHide();
    });
});

