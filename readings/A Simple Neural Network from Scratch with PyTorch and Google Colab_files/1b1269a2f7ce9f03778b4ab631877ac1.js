document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-a9a1cf2ca01efd362bfa52312712ae94.css">')
document.write('<div id=\"gist91298511\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-py_scaling-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-python \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-py_scaling-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-py_scaling-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> scale units<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-py_scaling-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-py_scaling-py-LC2\" class=\"blob-code blob-code-inner js-file-line\">X_max, _ <span class=\"pl-k\">=<\/span> torch.max(X, <span class=\"pl-c1\">0<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-py_scaling-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-py_scaling-py-LC3\" class=\"blob-code blob-code-inner js-file-line\">xPredicted_max, _ <span class=\"pl-k\">=<\/span> torch.max(xPredicted, <span class=\"pl-c1\">0<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-py_scaling-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-py_scaling-py-LC4\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-py_scaling-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-py_scaling-py-LC5\" class=\"blob-code blob-code-inner js-file-line\">X <span class=\"pl-k\">=<\/span> torch.div(X, X_max)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-py_scaling-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-py_scaling-py-LC6\" class=\"blob-code blob-code-inner js-file-line\">xPredicted <span class=\"pl-k\">=<\/span> torch.div(xPredicted, xPredicted_max)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-py_scaling-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-py_scaling-py-LC7\" class=\"blob-code blob-code-inner js-file-line\">y <span class=\"pl-k\">=<\/span> y <span class=\"pl-k\">/<\/span> <span class=\"pl-c1\">100<\/span>  <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> max test score is 100<\/span><\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/omarsar/1b1269a2f7ce9f03778b4ab631877ac1/raw/7c09cb5d764bfdeda19355ca0ef4ac7fdef4dad1/py_scaling.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/omarsar/1b1269a2f7ce9f03778b4ab631877ac1#file-py_scaling-py\">py_scaling.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')