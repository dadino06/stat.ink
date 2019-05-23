/*! Copyright (C) 2015-2019 AIZAWA Hina | MIT License */
($ => {
  const htmlEncode = str => {
    return String(str).replace(/[<>&"']/g, match => {
      const table = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&#39;',
      };
      return table[match];
    });
  };

  $.fn.currentTime = function (locale, timeZone) {
    const $this = this;
    window.setInterval(
      () => {
        const momentInstance = moment().locale(locale).tz(timeZone);
        $this.empty()
          .append(htmlEncode(momentInstance.format('l LT')))
          .append(' ')
          .append(
            $('<a href="javascript:;" data-toggle="modal" data-target="#timezone-dialog">')
              .text(momentInstance.format('z'))
          );
      },
      1000
    );
    return $this;
  };
})(jQuery);