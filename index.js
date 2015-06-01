var chars = [
 {k: 'Á', v: '&Aacute;'},
 {k: 'á', v: '&aacute;'},
 {k: 'Â', v: '&Acirc;'},
 {k: 'â', v: '&acirc;'},
 {k: 'À', v: '&Agrave;'},
 {k: 'à', v: '&agrave;'},
 {k: 'Å', v: '&Aring;'},
 {k: 'å', v: '&aring;'},
 {k: 'Ã', v: '&Atilde;'},
 {k: 'ã', v: '&atilde;'},
 {k: 'Ä', v: '&Auml;'},
 {k: 'ä', v: '&auml;'},
 {k: 'Æ', v: '&AElig;'},
 {k: 'æ', v: '&aelig;'},

 {k: 'É', v: '&Eacute;'},
 {k: 'é', v: '&eacute;'},
 {k: 'Ê', v: '&Ecirc;'},
 {k: 'ê', v: '&ecirc;'},
 {k: 'È', v: '&Egrave;'},
 {k: 'è', v: '&egrave;'},
 {k: 'Ë', v: '&Euml;'},
 {k: 'ë', v: '&euml;'},
 {k: 'Ð', v: '&ETH;'},
 {k: 'ð', v: '&eth;'},
  
 {k: 'Í', v: '&Iacute;'},
 {k: 'í', v: '&iacute;'},
 {k: 'Î', v: '&Icirc;'},
 {k: 'î', v: '&icirc;'},
 {k: 'Ì', v: '&Igrave;'},
 {k: 'ì', v: '&igrave;'},
 {k: 'Ï', v: '&Iuml;'},
 {k: 'ï', v: '&iuml;'},

 {k: 'Ó', v: '&Oacute;'},
 {k: 'ó', v: '&oacute;'},
 {k: 'Ô', v: '&Ocirc;'},
 {k: 'ô', v: '&ocirc;'},
 {k: 'Ò', v: '&Ograve;'},
 {k: 'ò', v: '&ograve;'},
 {k: 'Ø', v: '&Oslash;'},
 {k: 'ø', v: '&oslash;'},
 {k: 'Õ', v: '&Otilde;'},
 {k: 'õ', v: '&otilde;'},
 {k: 'Ö', v: '&Ouml;'},
 {k: 'ö', v: '&ouml;'},
  
 {k: 'Ú', v: '&Uacute;'},
 {k: 'ú', v: '&uacute;'},
 {k: 'Û', v: '&Ucirc;'},
 {k: 'û', v: '&ucirc;'},
 {k: 'Ù', v: '&Ugrave;'},
 {k: 'ù', v: '&ugrave;'},
 {k: 'Ü', v: '&Uuml;'},
 {k: 'ü', v: '&uuml;'},

 {k: 'Ç', v: '&Ccedil;'},
 {k: 'ç', v: '&ccedil;'},

 {k: 'Ñ', v: '&Ntilde;'},
 {k: 'ñ', v: '&ntilde;'}
];

module.exports = function(text) {
  for(var i = 0; i < chars.length; i++) {
    var c = chars[i];
    while(text.indexOf(c.k) != -1) {
      text = text.replace(c.k, c.v);
    }
  }
  return text;
}
