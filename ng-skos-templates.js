angular.module('ngSKOS').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('template/skos-concept-list.html',
    "<div><ul ng-if=\"concepts.length\" style=\"list-style-type:none;padding-left:0px\"><li ng-repeat=\"c in concepts\" style=\"max-width:280px;display:block\"><span class=\"notation\">{{c.notation[0]}}</span> <span>{{c.prefLabel.de}}</span><div style=\"display:inline-table\"><a href=\"#\" ng-click=\"onSelect(c)\"><span class=\"glyphicon glyphicon-search\"></span></a> <a href=\"#\" ng-click=\"removeConcept($index)\"><span class=\"glyphicon glyphicon-trash\"></span></a></div></li></ul></div>"
  );


  $templateCache.put('template/skos-concept-mapping.html',
    "<div><div ng-if=\"!from.length && !to.length\" style=\"margin-top:50px;margin-bottom:40px;text-align:center\"><em class=\"notification\">Please choose a concept scheme for mapping</em></div><div ng-if=\"mapping.from.length && !from.length && !to.length\" style=\"margin-top:10px;margin-bottom:5px;text-align:center\"><em class=\"notification\">Please choose a term to work on</em></div><div ng-if=\"from.length || mapping.to[0].notation.length\" style=\"width:100%\"><table style=\"width:95%;margin:0 auto;align:center\"><thead class=\"simple-list\" style=\"text-align:center\"><tr><th style=\"width:400px\"></th><th style=\"width:24px\"></th><th style=\"width:400px;text-align:right\"></th></tr></thead><tbody><tr><td><div class=\"tmpl-border mappingResults-from\"><div ng-if=\"mapping.from.length\" skos-concept-list=\"mapping.from\" on-select=\"selectFrom\"></div><div ng-if=\"!mapping.from.length\"><em class=\"notification\">Please select a source mapping term</em></div></div></td><td><div style=\"margin:30px auto\"><big><span class=\"glyphicon glyphicon-arrow-right\"></span></big></div></td><td><div class=\"tmpl-border mappingResults-to\" style=\"float:right\"><div ng-if=\"mapping.to.length\" skos-concept-list=\"mapping.to\" on-select=\"selectTo\"></div><div ng-if=\"!mapping.to.length\"><em class=\"notification\">Please select a target mapping term</em></div></div></td></tr></tbody></table></div><div ng-if=\"from.length && to.length\"><div style=\"width:95%;margin:0 auto\"><div style=\"float:left;margin-bottom:5px;padding:4px\"><div><span style=\"margin-left:12px\">Choose mapping strength:</span></div><form style=\"margin-right:10px;display:inline\"><input style=\"margin: 0px 12px\" type=\"radio\" name=\"strengthtype\" ng-model=\"mapping.type.value\" value=\"0\">none<input style=\"margin: 0px 12px\" type=\"radio\" name=\"strengthtype\" ng-model=\"mapping.type.value\" value=\"3\">strong<input style=\"margin: 0px 12px\" type=\"radio\" name=\"strengthtype\" ng-model=\"mapping.type.value\" value=\"2\">medium<input style=\"margin: 0px 12px\" type=\"radio\" name=\"strengthtype\" ng-model=\"mapping.type.value\" value=\"1\">weak</form></div><div style=\"float:right;margin-top:10px\"><button ng-click=\"saveMapping()\" ng-disabled=\"!mapping.from.length || !mapping.to.length\">Save current mapping</button></div></div></div></div>"
  );


  $templateCache.put('template/skos-concept-thesaurus.html',
    "<div class=\"skos-concept-thesaurus\"><ul ng-if=\"ancestors.length\" class=\"ancestors\"><span ng-if=\"inScheme\" class=\"classification\">{{inScheme}}</span><li class=\"ancestor\" ng-repeat=\"a in ancestors\"><span skos-label=\"a\" lang=\"{{language}}\" ng-click=\"update(a);reload();\"></span></li></ul><div class=\"top top-classic\"><span ng-if=\"notation\" class=\"notation\">{{notation[0]}}</span> <b><span skos-label=\"concept\" lang=\"{{language}}\"></span></b><a ng-if=\"notation\" class=\"uri\" href=\"{{uri}}\"><span style=\"vertical-align:-10%\" class=\"glyphicon glyphicon-globe\"></span></a></div><div ng-if=\"altLabel.length\" class=\"skos-concept-altlabel\"><ul><li ng-repeat=\"alt in altLabel\"><span ng-if=\"$index < 5\" style=\"display:inline\">{{alt}}</span> <span style=\"margin-left:-4px;margin-right:3px\" ng-if=\"$index < 4 && $index < altLabel.length-1\">,</span></li></ul></div><div ng-if=\"broader.length\" class=\"skos-concept-thesaurus-relation\"><b>Broader Terms:</b><ul ng-repeat=\"b in broader\"><li><span skos-label=\"b\" lang=\"{{language}}\" ng-click=\"click(b)\"></li></ul></div><div ng-if=\"narrower.length\" class=\"skos-concept-thesaurus-relation\"><b>Narrower Terms:</b><ul ng-repeat=\"n in narrower\"><li><span skos-label=\"n\" lang=\"{{language}}\" ng-click=\"click(n)\"></li></ul></div><div ng-if=\"related.length\" class=\"skos-concept-thesaurus-relation\"><b>Related Terms:</b><ul ng-repeat=\"r in related\"><li><span skos-label=\"r\" lang=\"{{language}}\" ng-click=\"click(r)\"></li></ul></div></div>"
  );


  $templateCache.put('template/skos-concept.html',
    "<div class=\"skos-concept\"><div class=\"top top-alt\"><span ng-if=\"notation.length\" class=\"notation\">{{notation[0]}}</span> <b><span ng-if=\"prefLabel\" skos-label=\"concept\" lang=\"{{language}}\"></span></b><a ng-if=\"uri && uri != notation\" class=\"uri\" href=\"{{uri}}\" target=\"_blank\"><span class=\"glyphicon glyphicon-globe\"></span></a></div><div class=\"skos-concept-connected\"><div ng-if=\"altLabel.length\" class=\"skos-concept-altlabel\"><ul><li ng-repeat=\"alt in altLabel\"><span ng-if=\"$index < 5\" style=\"display:inline\">{{alt}}</span> <span style=\"margin-left:-4px;margin-right:3px\" ng-if=\"$index < 4 && $index < altLabel.length-1\">,</span></li></ul></div><div ng-if=\"broader.length\" class=\"skos-concept-relation skos-concept-relation-broader\"><ul ng-repeat=\"c in broader\"><li><span skos-label=\"c\" lang=\"{{language}}\" ng-click=\"click(c)\"></span></li></ul></div><div ng-if=\"narrower.length\" class=\"skos-concept-relation skos-concept-relation-narrower\"><ul ng-repeat=\"c in narrower\"><li><span skos-label=\"c\" lang=\"{{language}}\" ng-click=\"click(c)\"></span></li></ul></div><div ng-if=\"related.length\" class=\"skos-concept-relation skos-concept-relation-related\"><ul ng-repeat=\"c in related\"><li><span skos-label=\"c\" lang=\"{{language}}\" ng-click=\"click(c)\"></span></li></ul></div><div ng-if=\"note\">Note: <em>{{note.en[0]}}</em></div></div></div>"
  );


  $templateCache.put('template/skos-mapping-collection.html',
    "<accordion close-others=\"false\"><div ng-repeat=\"s in mappings\"><div ng-repeat=\"(skey, source) in s\"><accordion-group is-open=\"status[skey].open\" style=\"margin-bottom:6px\"><accordion-heading><b>{{skey | uppercase}}</b><i class=\"pull-right glyphicon\" ng-class=\"{'glyphicon-chevron-down': status[skey].open, 'glyphicon-chevron-right': !status[skey].open}\"></i></accordion-heading><div ng-repeat=\"f in source\"><span ng-repeat=\"(fkey, from) in f\"><span ng-repeat=\"t in from\"><span ng-repeat=\"(tkey, to) in t\"><div skos-mapping-table=\"to\" select-mapping=\"useMapping\"></div></span></span></span></div></accordion-group></div></div></accordion>"
  );


  $templateCache.put('template/skos-mapping-table.html',
    "<table style=\"white-space:nowrap\" class=\"table table-hover table-condensed table-bordered\"><thead><tr><th><span class=\"classification\">{{mapping[0].from[0].inScheme.notation[0]}}</span></th><th><span class=\"classification\">{{mapping[0].to[0].inScheme.notation[0]}}</span></th><th><span>Type</span><a href=\"\" style=\"text-decoration:none\" ng-click=\"predicate = 'type.value';reverse = !reverse\"><small><span class=\"glyphicon glyphicon-sort\"></span></small></a></th><th><span>Date</span><a href=\"\" style=\"text-decoration:none\" ng-click=\"predicate = 'timestamp';reverse = !reverse\"><small><span class=\"glyphicon glyphicon-sort\"></span></small></a></th><th ng-if=\"select\">Actions</th></tr></thead><tbody><tr ng-repeat=\"m in mapping | orderBy:predicate:reverse\"><td><ul class=\"simple-list\" style=\"margin-bottom:0px\"><li ng-repeat=\"f in m.from\"><span class=\"notation\" popover=\"{{f.prefLabel.de}}\" popover-trigger=\"mouseenter\">{{f.notation[0]}}</span></li></ul></td><td><ul class=\"simple-list\" style=\"margin-bottom:0px\"><li ng-repeat=\"t in m.to\"><span class=\"notation\" popover=\"{{t.prefLabel.de}}\" popover-trigger=\"mouseenter\">{{t.notation[0]}}</span></li></ul></td><td>{{m.type.prefLabel.en}}</td><td>{{m.timestamp}}</td><td ng-if=\"select\" style=\"text-align:center\"><a style=\"cursor:pointer\" ng-click=\"select(m)\" title=\"Select mapping\"><span class=\"glyphicon glyphicon-check\"></span></a></td></tr></tbody></table>"
  );


  $templateCache.put('template/skos-mapping.html',
    "<div class=\"skos-mapping\"><table style=\"width:100%\"><thead><tr style=\"width:100%\"><th style=\"width:45%\"><span class=\"classification\">{{mapping[0].from[0].inScheme.notation[0]}}</span></th><th style=\"width:10%\"></th><th style=\"width:45%\"><span class=\"classification\">{{mapping[0].to[0].inScheme.notation[0]}}</span></th></tr></thead></table><div ng-repeat=\"m in mapping\"><table style=\"width:100%\"><thead><tr style=\"width:100%\"><th style=\"width:45%\"></th><th style=\"width:10%\"></th><th style=\"width:45%\"></th></tr></thead><tbody class=\"mappingResults\"><tr style=\"vertical-align:top\"><td><div class=\"mappingResults-from\"><ul><li ng-repeat=\"from in m.from\"><span class=\"notation\" popover=\"{{from.prefLabel.en}}\" popover-trigger=\"mouseenter\">{{from.notation[0]}}</span></li></ul></div></td><td><div class=\"mappingResults-icon\"><big><span ng-if=\"m.from.length || m.to.length\" class=\"glyphicon glyphicon-arrow-right\"></span></big></div></td><td><div class=\"mappingResults-to\"><ul><li ng-repeat=\"target in m.to\"><span class=\"notation\" popover=\"{{target.prefLabel.en}}\" popover-trigger=\"mouseenter\">{{target.notation[0]}}</span></li></ul></div></td></tr></tbody></table><div class=\"mappingFoot\"><ul ng-if=\"m.from.length\"><li><span><b>Type:</b></span> <span>{{m.type}}</span> <span><b>Date added:</b></span> <span>{{m.timestamp}}</span> <span><b>Database:</b></span> <span>{{m.source}}</span> <button style=\"float:right\" ng-click=\"useMapping(m)\" ng-if=\"useMapping\">Use</button></li></ul></div><div ng-if=\"$index < mapping.length-1\" style=\"border-bottom:1px solid black;margin-bottom:5px\"></div></div></div>"
  );


  $templateCache.put('template/skos-occurrences.html',
    "<div class=\"skos-occurrences\"><div class=\"skos-occurrences occ-details\"><table><tr><td>Used notation:</td><td><span ng-if=\"search.length\" class=\"notation\" popover=\"{{search[0].prefLabel.de}}\" popover-trigger=\"mouseenter\">{{search[0].notation[0]}}</span></td></tr><tr><td><b>Used</b> concept scheme:</td><td><span ng-if=\"search.length\" class=\"classification\">{{search[0].inScheme.notation[0]}}</span></td></tr><tr><td><b>Target</b> concept scheme:</td><td><span ng-if=\"search.length\" class=\"classification\">{{target.notation[0]}}</span></td></tr><tr><td>Used database:</td><td><span ng-if=\"search.length\" class=\"dbase\">{{database.notation[0]}}</span></td></tr><tr ng-if=\"search.length\"><td>Results (total) for <span ng-if=\"search.length\" class=\"notation\" popover=\"{{search[0].prefLabel.de}}\" popover-trigger=\"mouseenter\">{{search[0].notation[0]}}</span>:</td><td>{{total}}</td></tr></table></div><div class=\"skos-occurrences occ-results\">Corresponding notations in <span ng-if=\"search.length\" class=\"classification\">{{target.notation[0]}}</span>:<table ng-if=\"search.length\" class=\"table table-hover table-condensed table-bordered\"><thead><tr><th>Notation</th><th>total</th><th>% of total results</th></tr></thead><tbody><tr ng-repeat=\"not in hits\"><td><span ng-if=\"not.length\" class=\"notation\" popover=\"{{not[0].prefLabel.de}}\" popover-trigger=\"mouseenter\">{{not[0].notation[0]}}</span></td><td>{{not[1]}}</td><td>{{not[1]/total*100 | number:1}} %</td></tr></tbody></table></div></div>"
  );


  $templateCache.put('template/skos-search.html',
    "<div class=\"concept concept-search\"></div>"
  );


  $templateCache.put('template/skos-tree.html',
    "<div class=\"skos-tree\"><p class=\"set\"><span ng-if=\"tree.notation\" class=\"notation\">{{tree.notation[0]}}</span> <span class=\"nlabel\">{{ tree.prefLabel.de }}</span></p><ul><li ng-repeat=\"n in tree.narrower\"><span skos-tree=\"n\"></span></li></ul></div>"
  );

}]);
