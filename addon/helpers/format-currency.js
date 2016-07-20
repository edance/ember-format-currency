import Ember from 'ember';

export default Ember.Helper.helper(function(params) {
  var n = params[0],
      c = isNaN(c = Math.abs(params[1])) ? 2 : c,
      d = '.',
      t = ',',
      i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + '',
      j = (j = i.length) > 3 ? j % 3 : 0;

  return '$' + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');
});
