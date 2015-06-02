var entities = {
 'Á': '&Aacute;',
 'á': '&aacute;',
 'Â': '&Acirc;',
 'â': '&acirc;',
 'À': '&Agrave;',
 'à': '&agrave;',
 'Å': '&Aring;',
 'å': '&aring;',
 'Ã': '&Atilde;',
 'ã': '&atilde;',
 'Ä': '&Auml;',
 'ä': '&auml;',
 'Æ': '&AElig;',
 'æ': '&aelig;',

 'É': '&Eacute;',
 'é': '&eacute;',
 'Ê': '&Ecirc;',
 'ê': '&ecirc;',
 'È': '&Egrave;',
 'è': '&egrave;',
 'Ë': '&Euml;',
 'ë': '&euml;',
 'Ð': '&ETH;',
 'ð': '&eth;',

 'Í': '&Iacute;',
 'í': '&iacute;',
 'Î': '&Icirc;',
 'î': '&icirc;',
 'Ì': '&Igrave;',
 'ì': '&igrave;',
 'Ï': '&Iuml;',
 'ï': '&iuml;',

 'Ó': '&Oacute;',
 'ó': '&oacute;',
 'Ô': '&Ocirc;',
 'ô': '&ocirc;',
 'Ò': '&Ograve;',
 'ò': '&ograve;',
 'Ø': '&Oslash;',
 'ø': '&oslash;',
 'Õ': '&Otilde;',
 'õ': '&otilde;',
 'Ö': '&Ouml;',
 'ö': '&ouml;',

 'Ú': '&Uacute;',
 'ú': '&uacute;',
 'Û': '&Ucirc;',
 'û': '&ucirc;',
 'Ù': '&Ugrave;',
 'ù': '&ugrave;',
 'Ü': '&Uuml;',
 'ü': '&uuml;',

 'Ç': '&Ccedil;',
 'ç': '&ccedil;',

 'Ñ': '&Ntilde;',
 'ñ': '&ntilde;'
};

module.exports = function(text) {
  return text.split("").map(function(char) {
    return entities[char] || char;
  }).join("");
}
