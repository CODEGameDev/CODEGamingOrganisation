$(document).ready(function () {
    $('#wrapper').fullpage({
        sectionsColor: ['#000', '#DE6163', '#6A8ACA', '#40D298', '#C47EB0', '#ffcd00'],
        anchors: ['main', 'about', 'team', 'games', 'news', 'upcoming'],
        navigation: true,
        navigationPosition: 'right'
    });
});