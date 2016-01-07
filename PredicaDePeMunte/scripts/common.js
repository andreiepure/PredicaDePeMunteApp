function UpdateTheme(theme)
{
    if (theme != null)
    {
        if (theme === 'normal')
        {
            $('body').removeClass('inverted');
            $('select').removeClass('inverted');
            $('.modal-content').removeClass('inverted');
        }
        else if (theme === 'inverted')
        {
            $('body').addClass('inverted');
            $('select').addClass('inverted');
            $('.modal-content').addClass('inverted');
        }
    }
}
