version=pmwiki-2.3.37 ordered=1 urlencoded=1
agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15
author=admin
charset=ISO-8859-1
csum=
host=172.18.0.1
name=Main.HomePage
rev=286
targets=Main.CONFIGCOOKBOOKNAME,Main.CONFIGCOOKBOOKREPOURL
text=(:Summary:The default home page for the ImagePopup cookbook:)%0a%0a%0aWelcome the ${CONFIG_COOKBOOK_NAME}  cookbook%0a%0a%0a!! Description%0a%0a%25color=red%25 PUT HERE A SHORT DESCRIPTION OF THE COOKBOOK. THE DETAILS ARE AT RECIPE PAGE.%0a%0aThe details of the ${CONFIG_COOKBOOK_NAME} cookbook are described at [[https://www.pmwiki.org/wiki/Cookbook/${CONFIG_COOKBOOK_NAME} | the ${CONFIG_COOKBOOK_NAME} cookbook's recipe page ]]. %0aThis wiki contains also a  [[Main.${CONFIG_COOKBOOK_NAME}  |local version of the cookbook's recipe page]]. You can use the local version for editing before publishing it on the PmWiki website. %0aThe source code of this cookbook is at [[${CONFIG_COOKBOOK_REPO_URL}| the cookbook's repository]], which also provides a devcontainer in %0awhich you can see the plugin in action and further develop it. %0aThe devcontainer is based on the basic pmwiki devcontainer at https://github.com/harcokuppens/pmwiki-basic.%0a%0a!! Example%0a%0aThe following pmwiki markup:%0a%0a%0a-> %25color=red%25  Put here EXAMPLE PMWIKI MARKUP between [= [@ ... @] =].\\%0a     Example:%0a[@ %0a        (:example:) %0a@]%0a%0agives below as result.%0a%0a%0a-> %25color=red%25  Put here the same EXAMPLE PMWIKI MARKUP without [= [@ ... @] =].\\%0a     Result of example:%0a%0a          (:example:)
time=1730886175
author:1730886175=admin
diff:1730886175:1730886135:=9c9%0a%3c %25color=red%25 PUT HERE A SHORT DESCRIPTION OF THE COOKBOOK. THE DETAILS ARE AT RECIPE PAGE.%0a---%0a> %25color=red%25 %3cPUT HERE SHORT DESCRIPTION OF COOKBOOK; DETAILS ARE AT RECIPE PAGE>%0a
host:1730886175=172.18.0.1
author:1730886135=admin
diff:1730886135:1730886123:=
host:1730886135=172.18.0.1
author:1730886123=admin
diff:1730886123:1730886087:=31,32c31%0a%3c -> %25color=red%25  Put here the same EXAMPLE PMWIKI MARKUP without [= [@ ... @] =].\\%0a%3c      Result of example:%0a---%0a> -> %25color=red%25  Put here the same EXAMPLE PMWIKI MARKUP without [= [@ ... @] =]\\%0a
host:1730886123=172.18.0.1
author:1730886087=admin
diff:1730886087:1730886078:=23a24%0a> %0a
host:1730886087=172.18.0.1
author:1730886078=admin
diff:1730886078:1730886065:=25,27c25%0a%3c [@ %0a%3c         (:example:) %0a%3c @]%0a---%0a> [@ (:example:) @]%0a
host:1730886078=172.18.0.1
author:1730886065=admin
diff:1730886065:1730886038:=23,24c23,24%0a%3c      Example:%0a%3c %0a---%0a>      Example:\\%0a> \\%0a
host:1730886065=172.18.0.1
author:1730886038=admin
diff:1730886038:1730886005:=30c30%0a%3c -> %25color=red%25  Put here the same EXAMPLE PMWIKI MARKUP without [= [@ ... @] =]\\%0a---%0a> -> %25color=red%25  put here the same EXAMPLE PMWIKI MARKUP without [= [@ ... @] =]\\%0a
host:1730886038=172.18.0.1
author:1730886005=admin
diff:1730886005:1730885975:=22c22%0a%3c -> %25color=red%25  Put here EXAMPLE PMWIKI MARKUP between [= [@ ... @] =].\\%0a---%0a> -> %25color=red%25  put here EXAMPLE PMWIKI MARKUP between [= [@ ... @] =]\\%0a24d23%0a%3c \\%0a
host:1730886005=172.18.0.1
author:1730885975=admin
diff:1730885975:1730885952:=23,24c23%0a%3c      Example:\\%0a%3c [@ (:example:) @]%0a---%0a>      Example:  [@ (:example:) @]%0a
host:1730885975=172.18.0.1
author:1730885952=admin
diff:1730885952:1730885883:=23,24c23,24%0a%3c      Example:  [@ (:example:) @]%0a%3c %0a---%0a>      eg.  [@ (:example:) @]%0a> %0a28c28%0a%3c -> %25color=red%25  put here the same EXAMPLE PMWIKI MARKUP without [= [@ ... @] =]\\%0a---%0a> -> %25color=red%25            %3cput here the same EXAMPLE PMWIKI MARKUP>%0a
host:1730885952=172.18.0.1
author:1730885883=admin
diff:1730885883:1730885870:=23c23,24%0a%3c      eg.  [@ (:example:) @]%0a---%0a>      eg.  [@ %0a>      -> (:example:) @]%0a
host:1730885883=172.18.0.1
author:1730885870=admin
diff:1730885870:1730885858:=24c24%0a%3c      -> (:example:) @]%0a---%0a>        (:example:) @]%0a
host:1730885870=172.18.0.1
author:1730885858=admin
diff:1730885858:1730885840:=23,24c23%0a%3c      eg.  [@ %0a%3c        (:example:) @]%0a---%0a>      eg.  [= (:example:) =]%0a
host:1730885858=172.18.0.1
author:1730885840=admin
diff:1730885840:1730885809:=22c22%0a%3c -> %25color=red%25  put here EXAMPLE PMWIKI MARKUP between [= [@ ... @] =]\\%0a---%0a> -> %25color=red%25  put here EXAMPLE PMWIKI MARKUP between [ ... @]%3c%3c \\%0a
host:1730885840=172.18.0.1
author:1730885809=admin
diff:1730885809:1730885760:=22,23c22,23%0a%3c -> %25color=red%25  put here EXAMPLE PMWIKI MARKUP between [ ... @]%3c%3c \\%0a%3c      eg.  [= (:example:) =]%0a---%0a> -> %25color=red%25  put here EXAMPLE PMWIKI MARKUP between >>[@ ... @]%3c%3c \\%0a>      eg.  [@ (:example:) @]%0a
host:1730885809=172.18.0.1
author:1730885760=admin
diff:1730885760:1730885746:=22c22%0a%3c -> %25color=red%25  put here EXAMPLE PMWIKI MARKUP between >>[@ ... @]%3c%3c \\%0a---%0a> -> %25color=red%25  %3cput here EXAMPLE PMWIKI MARKUP between >>[@ ... @]%3c%3c >\\%0a
host:1730885760=172.18.0.1
author:1730885746=admin
diff:1730885746:1730885719:=22c22%0a%3c -> %25color=red%25  %3cput here EXAMPLE PMWIKI MARKUP between >>[@ ... @]%3c%3c >\\%0a---%0a> -> %25color=red%25  %3cput here EXAMPLE PMWIKI MARKUP between \[@  [@ ... @] @]>\\%0a
host:1730885746=172.18.0.1
author:1730885719=admin
diff:1730885719:1730885703:=22c22%0a%3c -> %25color=red%25  %3cput here EXAMPLE PMWIKI MARKUP between \[@  [@ ... @] @]>\\%0a---%0a> -> %25color=red%25  %3cput here EXAMPLE PMWIKI MARKUP between [@ [@ ... @] @]>\\%0a
host:1730885719=172.18.0.1
author:1730885703=admin
diff:1730885703:1730885627:=22c22%0a%3c -> %25color=red%25  %3cput here EXAMPLE PMWIKI MARKUP between [@ [@ ... @] @]>\\%0a---%0a> -> %25color=red%25  %3cput here EXAMPLE PMWIKI MARKUP>\\%0a25,28c25,28%0a%3c gives below as result.%0a%3c %0a%3c %0a%3c -> %25color=red%25            %3cput here the same EXAMPLE PMWIKI MARKUP>%0a---%0a> gives below as result. Just click on the images to see what happens.%0a> %0a> %0a>           %3cput here the same EXAMPLE PMWIKI MARKUP>%0a
host:1730885703=172.18.0.1
author:1730885627=admin
diff:1730885627:1730885595:=23c23,26%0a%3c      eg.  [@ (:example:) @]%0a---%0a>      eg. %25color=red%25 [@%0a>      %0a>          (:example:)%0a>       @]%0a
host:1730885627=172.18.0.1
author:1730885595=admin
diff:1730885595:1730885580:=23c23%0a%3c      eg. %25color=red%25 [@%0a---%0a>      eg. [@%0a
host:1730885595=172.18.0.1
author:1730885580=admin
diff:1730885580:1730885515:=21,24c21,23%0a%3c %0a%3c -> %25color=red%25  %3cput here EXAMPLE PMWIKI MARKUP>\\%0a%3c      eg. [@%0a%3c      %0a---%0a> [@%0a>          %25color=red%25  %3cput here EXAMPLE PMWIKI MARKUP>%0a> %0a26c25%0a%3c       @]%0a---%0a> @]%0a
host:1730885580=172.18.0.1
author:1730885515=admin
diff:1730885515:1730885499:=22c22%0a%3c          %25color=red%25  %3cput here EXAMPLE PMWIKI MARKUP>%0a---%0a>          %3cput here EXAMPLE PMWIKI MARKUP>%0a
host:1730885515=172.18.0.1
author:1730885499=admin
diff:1730885499:1730848133:=9c9%0a%3c %25color=red%25 %3cPUT HERE SHORT DESCRIPTION OF COOKBOOK; DETAILS ARE AT RECIPE PAGE>%0a---%0a> %3cPUT HERE SHORT DESCRIPTION OF COOKBOOK; DETAILS ARE AT RECIPE PAGE>%0a
host:1730885499=172.18.0.1
author:1730848133=admin
diff:1730848133:1730848053:=12c12%0a%3c This wiki contains also a  [[Main.${CONFIG_COOKBOOK_NAME}  |local version of the cookbook's recipe page]]. You can use the local version for editing before publishing it on the PmWiki website. %0a---%0a> This wiki contains also a  [[Main.Recipe |local version of the cookbook's recipe page]]. You can use the local version for editing before publishing it on the PmWiki website. %0a
host:1730848133=172.18.0.1
author:1730848053=admin
diff:1730848053:1730847995:=30,32c30,32%0a%3c           %3cput here the same EXAMPLE PMWIKI MARKUP>%0a%3c %0a%3c           (:example:)%0a\ No newline at end of file%0a---%0a> %3cput here the same EXAMPLE PMWIKI MARKUP>%0a> %0a> (:example:)%0a\ No newline at end of file%0a
host:1730848053=172.18.0.1
author:1730847995=admin
diff:1730847995:1730737229:=3,6c3,15%0a%3c %0a%3c Welcome the ${CONFIG_COOKBOOK_NAME}  cookbook%0a%3c %0a%3c %0a---%0a> -------%0a> %0a> This is a template of your cookbook's homepage. Instructions: %0a> %0a> # add a short description for the cookbook, and%0a> # fill in the variables $COOKBOOK_NAME en $COOKBOOK_REPO_URL%0a> # add EXAMPLE PMWIKI MARKUP to quickly show how it works%0a> %0a> -------%0a> %0a> %0a> ! $COOKBOOK_NAME cookbook for PmWiki %0a> %0a11,15c20,23%0a%3c The details of the ${CONFIG_COOKBOOK_NAME} cookbook are described at [[https://www.pmwiki.org/wiki/Cookbook/${CONFIG_COOKBOOK_NAME} | the ${CONFIG_COOKBOOK_NAME} cookbook's recipe page ]]. %0a%3c This wiki contains also a  [[Main.Recipe |local version of the cookbook's recipe page]]. You can use the local version for editing before publishing it on the PmWiki website. %0a%3c The source code of this cookbook is at [[${CONFIG_COOKBOOK_REPO_URL}| the cookbook's repository]], which also provides a devcontainer in %0a%3c which you can see the plugin in action and further develop it. %0a%3c The devcontainer is based on the basic pmwiki devcontainer at https://github.com/harcokuppens/pmwiki-basic.%0a---%0a> The details of this cookbook are described at [[https://www.pmwiki.org/wiki/Cookbook/$COOKBOOK_NAME | the cookbook's recipe page ]]. This wiki contains also a   [[Main.Recipe |local version of the cookbook's recipe page]]. You can use the local version for editing before publishing it on the PmWiki website. %0a> The source code of this cookbook is at [[https://$COOKBOOK_REPO_URL| the cookbook's repository]], which also provides%0a> a devcontainer in which you can see the plugin in action and further develop it. The devcontainer %0a> is based on the basic pmwiki devcontainer at https://github.com/harcokuppens/pmwiki-basic.%0a
host:1730847995=172.18.0.1
author:1730737229=admin
diff:1730737229:1730737220:=40c40%0a%3c (:example:)%0a\ No newline at end of file%0a---%0a> (:dfexample:)%0a\ No newline at end of file%0a
host:1730737229=172.18.0.1
author:1730737220=admin
diff:1730737220:1730736707:=40c40%0a%3c (:dfexample:)%0a\ No newline at end of file%0a---%0a> (:example:)%0a\ No newline at end of file%0a
host:1730737220=172.18.0.1
author:1730736707=admin
diff:1730736707:1730721533:=31,32d30%0a%3c %0a%3c          (:example:)%0a39,40d36%0a%3c %0a%3c (:example:)%0a\ No newline at end of file%0a
host:1730736707=172.18.0.1
author:1730721533=admin
diff:1730721533:1730721496:=30c30%0a%3c          %3cput here EXAMPLE PMWIKI MARKUP>%0a---%0a>          %3cPUT HERE EXAMPLE PMWIKI MARKUP>%0a36c36%0a%3c %3cput here the same EXAMPLE PMWIKI MARKUP>%0a---%0a> %3cPUT HERE SAME EXAMPLE PMWIKI MARKUP>%0a
host:1730721533=172.18.0.1
author:1730721496=admin
diff:1730721496:1730721459:=9d8%0a%3c # add EXAMPLE PMWIKI MARKUP to quickly show how it works%0a
host:1730721496=172.18.0.1
author:1730721459=admin
diff:1730721459:1730721270:=20c20%0a%3c The source code of this cookbook is at [[https://$COOKBOOK_REPO_URL| the cookbook's repository]], which also provides%0a---%0a> The source code of this cookbook is at [[https://$COOKBOOK_REPO_URL]], which also provides%0a
host:1730721459=172.18.0.1
author:1730721270=admin
diff:1730721270:1730721210:=20c20%0a%3c The source code of this cookbook is at [[https://$COOKBOOK_REPO_URL]], which also provides%0a---%0a> The source code of this cookbook is at [[https://YOUR-REPO-URL]], which also provides%0a
host:1730721270=172.18.0.1
author:1730721210=admin
diff:1730721210:1730720039:=3,14c3,6%0a%3c -------%0a%3c %0a%3c This is a template of your cookbook's homepage. Instructions: %0a%3c %0a%3c # add a short description for the cookbook, and%0a%3c # fill in the variables $COOKBOOK_NAME en $COOKBOOK_REPO_URL%0a%3c %0a%3c -------%0a%3c %0a%3c %0a%3c ! $COOKBOOK_NAME cookbook for PmWiki %0a%3c %0a---%0a> [-- ==> This is a template of your cookbook's homepage %3c== --]%0a> %0a> Welcome to the ... cookbook%0a> %0a19c11%0a%3c The details of this cookbook are described at [[https://www.pmwiki.org/wiki/Cookbook/$COOKBOOK_NAME | the cookbook's recipe page ]]. This wiki contains also a   [[Main.Recipe |local version of the cookbook's recipe page]]. You can use the local version for editing before publishing it on the PmWiki website. %0a---%0a> The details of the this cookbook are described at [[Main.Recipe |the cookbook's recipe page]]. %0a21,22c13%0a%3c a devcontainer in which you can see the plugin in action and further develop it. The devcontainer %0a%3c is based on the basic pmwiki devcontainer at https://github.com/harcokuppens/pmwiki-basic.%0a---%0a> a devcontainer in which you can see the plugin in action and further develop it.%0a
host:1730721210=172.18.0.1
author:1730720039=admin
diff:1730720039:1730720006:=3c3%0a%3c [-- ==> This is a template of your cookbook's homepage %3c== --]%0a---%0a> [--This is a template of your cookbook's homepage--]%0a
host:1730720039=172.18.0.1
author:1730720006=admin
diff:1730720006:1730719987:=3c3%0a%3c [--This is a template of your cookbook's homepage--]%0a---%0a> [--Template of your cookbook's homepage--]%0a
host:1730720006=172.18.0.1
author:1730719987=admin
diff:1730719987:1730719974:=3c3%0a%3c [--Template of your cookbook's homepage--]%0a---%0a> --Template of your cookbook's homepage--%0a
host:1730719987=172.18.0.1
author:1730719974=admin
diff:1730719974:1730719951:=3c3%0a%3c --Template of your cookbook's homepage--%0a---%0a> ! Template of your cookbook's homepage%0a
host:1730719974=172.18.0.1
author:1730719951=admin
diff:1730719951:1730719286:=2,3d1%0a%3c %0a%3c ! Template of your cookbook's homepage%0a
host:1730719951=172.18.0.1
author:1730719286=admin
diff:1730719286:1730719270:=3c3%0a%3c Welcome to the ... cookbook%0a---%0a> Welcome the ... cookbook%0a
host:1730719286=172.18.0.1
author:1730719270=admin
diff:1730719270:1730719228:=7d6%0a%3c %3cPUT HERE SHORT DESCRIPTION OF COOKBOOK; DETAILS ARE AT RECIPE PAGE>%0a
host:1730719270=172.18.0.1
author:1730719228=admin
diff:1730719228:1730707651:=3,4c3,4%0a%3c Welcome the ... cookbook%0a%3c %0a---%0a> Welcome the ImagePopup cookbook%0a> %0a7,9c7,10%0a%3c %0a%3c The details of the this cookbook are described at [[Main.Recipe |the cookbook's recipe page]]. %0a%3c The source code of this cookbook is at [[https://YOUR-REPO-URL]], which also provides%0a---%0a> The ImagePopup cookbook is a plugin for PmWiki which after including an [@(:imagepopup :)@] directive in a wiki page gives you automatically image popups for images on a wiki page. That is when you click on an image it will open a larger popup window with the image allowing you to take a better look at the image. The popup of the image is intelligently placed such that it doesn't overlay the original image or doesn't overlap a specified surrounding box around the image so that info around the image is kept visible. Eg. see the example below where the popup does not overlap the text beside the image. If you click on another image the old popup window is removed and a new one is opened. You can also close the popup window by clicking on the image again or by clicking on the popup window.%0a> %0a> The details of the ImagePopup cookbook are described at [[Main.ImagePopup |the ImagePopup cookbook's description page]]. %0a> The source code of the ImagePopup plugin is at [[https://github.com/harcokuppens/pmwiki-cookbook-imagepopup/]], which also provides%0a17c18,23%0a%3c          %3cPUT HERE EXAMPLE PMWIKI MARKUP>%0a---%0a>     (:imagepopup class="popup" width="500" closebutton="false" padding="15" margin="5" wrapcount="1" :)%0a> %0a>     %25class=popup width=200px%25 Attach:person1.jpg '''Person1'''\%0a>     %25class=popup width=200px%25 Attach:person2.jpg '''Person2'''\%0a>     %25class=popup width=200px%25 Attach:person3.jpg '''Person3'''\%0a>     %25class=popup width=200px%25 Attach:person4.jpg '''Person4'''%0a22,23c28,34%0a%3c %0a%3c %3cPUT HERE SAME EXAMPLE PMWIKI MARKUP>%0a---%0a> (:imagepopup class="popup" width="500" closebutton="false" padding="15" margin="5" wrapcount="1" :)%0a> %0a> %25class=popup width=200px%25 Attach:person1.jpg '''Person1'''\%0a> %25class=popup width=200px%25 Attach:person2.jpg '''Person2'''\%0a> %25class=popup width=200px%25 Attach:person3.jpg '''Person3'''\%0a> %25class=popup width=200px%25 Attach:person4.jpg '''Person4'''%0a> %0a
host:1730719228=172.18.0.1
author:1730707651=admin
diff:1730707651:1730413400:=9c9%0a%3c The details of the ImagePopup cookbook are described at [[Main.ImagePopup |the ImagePopup cookbook's description page]]. %0a---%0a> The details of the ImagePopup cookbook are described at [[Cookbook.ImagePopup |the ImagePopup cookbook's description page]]. %0a
host:1730707651=172.19.0.1
author:1730413400=admin
diff:1730413400:1730413354:=9c9%0a%3c The details of the ImagePopup cookbook are described at [[Cookbook.ImagePopup |the ImagePopup cookbook's description page]]. %0a---%0a> The details of the ImagePopup cookbook are described at [[Cookbook.ImagePopup |the ImagePopup cookbook's description page]]. \\%0a
host:1730413400=172.19.0.1
author:1730413354=admin
diff:1730413354:1730412802:=9,11c9%0a%3c The details of the ImagePopup cookbook are described at [[Cookbook.ImagePopup |the ImagePopup cookbook's description page]]. \\%0a%3c The source code of the ImagePopup plugin is at [[https://github.com/harcokuppens/pmwiki-cookbook-imagepopup/]], which also provides%0a%3c a devcontainer in which you can see the plugin in action and further develop it.%0a---%0a> The details of the ImagePopup cookbook are described at [[Cookbook.ImagePopup |the ImagePopup cookbook's description page]]. %0a
host:1730413354=172.19.0.1
author:1730412802=admin
diff:1730412802:1730411816:=7c7%0a%3c The ImagePopup cookbook is a plugin for PmWiki which after including an [@(:imagepopup :)@] directive in a wiki page gives you automatically image popups for images on a wiki page. That is when you click on an image it will open a larger popup window with the image allowing you to take a better look at the image. The popup of the image is intelligently placed such that it doesn't overlay the original image or doesn't overlap a specified surrounding box around the image so that info around the image is kept visible. Eg. see the example below where the popup does not overlap the text beside the image. If you click on another image the old popup window is removed and a new one is opened. You can also close the popup window by clicking on the image again or by clicking on the popup window.%0a---%0a> The ImagePopup  cookbook is a plugin for PmWiki  which after including an [@(:imagepopup )@] directive in a wiki page gives you automatically image popups for  images on a wiki page. That is when you click on an image it will opens a larger popup window with the image allowing to take a better look of the image. The popup of the image is  intelligently placed such that it doesn't overlay the original image or doesn't overlap a specified surrounding box around the image so that info around the image is kept visible. Eg. see the example below where the popup does not overlap the text beside the image.  If you click on another image the old popup window is removed and a new one is opened. You can also close the popup window by clicking on the image again or by clicking on the popup window.%0a
host:1730412802=172.19.0.1
author:1730411816=admin
diff:1730411816:1730411792:=16,21c16,21%0a%3c     (:imagepopup class="popup" width="500" closebutton="false" padding="15" margin="5" wrapcount="1" :)%0a%3c %0a%3c     %25class=popup width=200px%25 Attach:person1.jpg '''Person1'''\%0a%3c     %25class=popup width=200px%25 Attach:person2.jpg '''Person2'''\%0a%3c     %25class=popup width=200px%25 Attach:person3.jpg '''Person3'''\%0a%3c     %25class=popup width=200px%25 Attach:person4.jpg '''Person4'''%0a---%0a> (:imagepopup class="popup" width="500" closebutton="false" padding="15" margin="5" wrapcount="1" :)%0a> %0a> %25class=popup width=200px%25 Attach:person1.jpg '''Person1'''\%0a> %25class=popup width=200px%25 Attach:person2.jpg '''Person2'''\%0a> %25class=popup width=200px%25 Attach:person3.jpg '''Person3'''\%0a> %25class=popup width=200px%25 Attach:person4.jpg '''Person4'''%0a
host:1730411816=172.19.0.1
author:1730411792=admin
diff:1730411792:1730411713:=15a16%0a> %0a21a23%0a> %0a
host:1730411792=172.19.0.1
author:1730411713=admin
diff:1730411713:1730391724:=7,10c7,8%0a%3c The ImagePopup  cookbook is a plugin for PmWiki  which after including an [@(:imagepopup )@] directive in a wiki page gives you automatically image popups for  images on a wiki page. That is when you click on an image it will opens a larger popup window with the image allowing to take a better look of the image. The popup of the image is  intelligently placed such that it doesn't overlay the original image or doesn't overlap a specified surrounding box around the image so that info around the image is kept visible. Eg. see the example below where the popup does not overlap the text beside the image.  If you click on another image the old popup window is removed and a new one is opened. You can also close the popup window by clicking on the image again or by clicking on the popup window.%0a%3c %0a%3c The details of the ImagePopup cookbook are described at [[Cookbook.ImagePopup |the ImagePopup cookbook's description page]]. %0a%3c %0a---%0a> The ImagePopup  cookbook is a plugin for PmWiki  which after including an [@(:imagepopup )@] directive in a wiki page gives you automatically image popups for  images on a wiki page. That is when you click on an image it will opens a larger popup window with the image allowing to take a better look of the image. The popup of the image is  intelligently placed such that it doesn't overlay the original image. If you click on another image the old popup window is removed and a new one is openen. You can also close the popup window by clicking on it.%0a> %0a16,33c14,61%0a%3c %0a%3c (:imagepopup class="popup" width="500" closebutton="false" padding="15" margin="5" wrapcount="1" :)%0a%3c %0a%3c %25class=popup width=200px%25 Attach:person1.jpg '''Person1'''\%0a%3c %25class=popup width=200px%25 Attach:person2.jpg '''Person2'''\%0a%3c %25class=popup width=200px%25 Attach:person3.jpg '''Person3'''\%0a%3c %25class=popup width=200px%25 Attach:person4.jpg '''Person4'''%0a%3c %0a%3c @]%0a%3c %0a%3c gives below as result. Just click on the images to see what happens.%0a%3c %0a%3c (:imagepopup class="popup" width="500" closebutton="false" padding="15" margin="5" wrapcount="1" :)%0a%3c %0a%3c %25class=popup width=200px%25 Attach:person1.jpg '''Person1'''\%0a%3c %25class=popup width=200px%25 Attach:person2.jpg '''Person2'''\%0a%3c %25class=popup width=200px%25 Attach:person3.jpg '''Person3'''\%0a%3c %25class=popup width=200px%25 Attach:person4.jpg '''Person4'''%0a---%0a> (:imagepopup class="popup" width="500" closebutton="false" padding="15" margin="5" wrapcount="0" :)%0a> %0a> %25apply=img class=popup width=200px%25\%0a> Attach:person1.jpg \%0a> Attach:person2.jpg \%0a> Attach:person3.jpg \%0a> Attach:person4.jpg \%0a> Attach:person5.jpg \%0a> Attach:person6.jpg \%0a> %0a> ----%0a> %0a> %25width=200px class=popup%25 Attach:person1.jpg\%0a> %25width=200px class=popup%25 Attach:person2.jpg\%0a> %25width=200px class=popup%25 Attach:person3.jpg\%0a> %25width=200px class=popup%25 Attach:person4.jpg\%0a> %25width=200px class=popup%25 Attach:person5.jpg\%0a> %25width=200px class=popup%25 Attach:person6.jpg%0a> %0a>  @]%0a> %0a> gives below images as result. Just click on the images to see what happens.%0a> %0a> (:imagepopup class="popup" width="500" closebutton="false" padding="15" margin="5" wrapcount="0" :)%0a> %0a> %0a> %0a> %25apply=img class=popup width=200px%25\%0a> Attach:person1.jpg \%0a> Attach:person2.jpg \%0a> Attach:person3.jpg \%0a> Attach:person4.jpg \%0a> Attach:person5.jpg \%0a> Attach:person6.jpg \%0a> %0a> ----%0a> %0a> %25width=200px class=popup%25 Attach:person1.jpg\%0a> %25width=200px class=popup%25 Attach:person2.jpg\%0a> %25width=200px class=popup%25 Attach:person3.jpg\%0a> %25width=200px class=popup%25 Attach:person4.jpg\%0a> %25width=200px class=popup%25 Attach:person5.jpg\%0a> %25width=200px class=popup%25 Attach:person6.jpg%0a> %0a> %0a> %0a> %0a> %0a
host:1730411713=172.19.0.1
author:1730391724=admin
diff:1730391724:1730391705:=15,24d14%0a%3c %0a%3c %25apply=img class=popup width=200px%25\%0a%3c Attach:person1.jpg \%0a%3c Attach:person2.jpg \%0a%3c Attach:person3.jpg \%0a%3c Attach:person4.jpg \%0a%3c Attach:person5.jpg \%0a%3c Attach:person6.jpg \%0a%3c %0a%3c ----%0a
host:1730391724=172.19.0.1
author:1730391705=admin
diff:1730391705:1730382494:=14a15,24%0a> %0a> %25apply=img class=popup width=200px%25\%0a> Attach:person1.jpg \%0a> Attach:person2.jpg \%0a> Attach:person3.jpg \%0a> Attach:person4.jpg \%0a> Attach:person5.jpg \%0a> Attach:person6.jpg \%0a> %0a> ----%0a
host:1730391705=172.19.0.1
author:1730382494=admin
diff:1730382494:1730382458:=35c35%0a%3c gives below images as result. Just click on the images to see what happens.%0a---%0a> gives as result:%0a
host:1730382494=172.19.0.1
author:1730382458=admin
diff:1730382458:1730382093:=2,7c2,3%0a%3c %0a%3c Welcome the ImagePopup cookbook%0a%3c %0a%3c !! Description%0a%3c %0a%3c The ImagePopup  cookbook is a plugin for PmWiki  which after including an [@(:imagepopup )@] directive in a wiki page gives you automatically image popups for  images on a wiki page. That is when you click on an image it will opens a larger popup window with the image allowing to take a better look of the image. The popup of the image is  intelligently placed such that it doesn't overlay the original image. If you click on another image the old popup window is removed and a new one is openen. You can also close the popup window by clicking on it.%0a---%0a> ! Welcome the ImagePopup cookbook%0a> %0a
host:1730382458=172.19.0.1
author:1730382093=admin
diff:1730382093:1730381977:=2,5c2%0a%3c ! Welcome the ImagePopup cookbook%0a%3c %0a%3c %0a%3c !! Example%0a---%0a> Welcome the ImagePopup cookbook%0a
host:1730382093=172.19.0.1
author:1730381977=admin
diff:1730381977:1730381933:=1,3c1,14%0a%3c (:Summary:The default home page for the ImagePopup cookbook:)%0a%3c Welcome the ImagePopup cookbook%0a%3c %0a---%0a> (:Summary:The default home page for the PmWiki distribution:)%0a> Welcome to PmWiki!%0a> %0a> A local copy of PmWiki's%0a> documentation has been installed along with the software,%0a> and is available via the [[PmWiki/documentation index]].  %0a> %0a> To continue setting up PmWiki, see [[PmWiki/initial setup tasks]].%0a> %0a> The [[PmWiki/basic editing]] page describes how to create pages%0a> in PmWiki.  You can practice editing in the [[wiki sandbox]].%0a> %0a> More information about PmWiki is available from [[https://www.pmwiki.org]].%0a> %0a5d15%0a%3c %0a
host:1730381977=172.19.0.1
author:1730381933=admin
diff:1730381933:1730381885:=15c15%0a%3c The following pmwiki markup:%0a---%0a> %0a37,38d36%0a%3c %0a%3c gives as result:%0a
host:1730381933=172.19.0.1
author:1730381885=admin
diff:1730381885:1730371236:=14,36d13%0a%3c %0a%3c %0a%3c [@%0a%3c (:imagepopup class="popup" width="500" closebutton="false" padding="15" margin="5" wrapcount="0" :)%0a%3c %0a%3c %25apply=img class=popup width=200px%25\%0a%3c Attach:person1.jpg \%0a%3c Attach:person2.jpg \%0a%3c Attach:person3.jpg \%0a%3c Attach:person4.jpg \%0a%3c Attach:person5.jpg \%0a%3c Attach:person6.jpg \%0a%3c %0a%3c ----%0a%3c %0a%3c %25width=200px class=popup%25 Attach:person1.jpg\%0a%3c %25width=200px class=popup%25 Attach:person2.jpg\%0a%3c %25width=200px class=popup%25 Attach:person3.jpg\%0a%3c %25width=200px class=popup%25 Attach:person4.jpg\%0a%3c %25width=200px class=popup%25 Attach:person5.jpg\%0a%3c %25width=200px class=popup%25 Attach:person6.jpg%0a%3c %0a%3c  @]%0a
host:1730381885=172.19.0.1
author:1730371236=admin
diff:1730371236:1730371216:=27,28c27%0a%3c ----%0a%3c %0a---%0a> %3chr>%0a
host:1730371236=172.19.0.1
author:1730371216=admin
diff:1730371216:1730371182:=27,30d26%0a%3c %3chr>%0a%3c %25width=200px class=popup%25 Attach:person1.jpg\%0a%3c %25width=200px class=popup%25 Attach:person2.jpg\%0a%3c %25width=200px class=popup%25 Attach:person3.jpg\%0a
host:1730371216=172.19.0.1
author:1730371182=admin
diff:1730371182:1730371153:=22,25c22%0a%3c Attach:person3.jpg \%0a%3c Attach:person4.jpg \%0a%3c Attach:person5.jpg \%0a%3c Attach:person6.jpg \%0a---%0a> Attach:person3.jpg%0a
host:1730371182=172.19.0.1
author:1730371153=admin
diff:1730371153:1730371107:=19,22c19,22%0a%3c %25apply=img class=popup width=200px%25\%0a%3c Attach:person1.jpg \%0a%3c Attach:person2.jpg \%0a%3c Attach:person3.jpg%0a---%0a> %25apply=img class=popup%25\%0a> %25width=200px%25 Attach:person1.jpg \%0a> %25width=200px%25 Attach:person2.jpg \%0a> %25width=200px%25 Attach:person3.jpg%0a
host:1730371153=172.19.0.1
author:1730371107=admin
diff:1730371107:1730371091:=25c25%0a%3c %25width=200px class=popup%25 Attach:person5.jpg\%0a---%0a> %25width=200px class=popup%25 Attach:person5.jpg%0a
host:1730371107=172.19.0.1
author:1730371091=admin
diff:1730371091:1730371016:=24,29c24,27%0a%3c %25width=200px class=popup%25 Attach:person4.jpg\%0a%3c %25width=200px class=popup%25 Attach:person5.jpg%0a%3c %25width=200px class=popup%25 Attach:person6.jpg%0a%3c %0a%3c %0a%3c %0a---%0a> %25width=200px class=popup%25 Attach:person4.jpg %25width=200px class=popup%25 Attach:person5.jpg %25width=200px class=popup%25 Attach:person6.jpg%0a> %0a> %0a> %25width=200px class=popup%25 Attach:person4.jpg  Attach:person5.jpg %25width=200px%25 Attach:person6.jpg%0a
host:1730371091=172.19.0.1
author:1730371016=admin
diff:1730371016:1730370965:=24,30c24%0a%3c %25width=200px class=popup%25 Attach:person4.jpg %25width=200px class=popup%25 Attach:person5.jpg %25width=200px class=popup%25 Attach:person6.jpg%0a%3c %0a%3c %0a%3c %25width=200px class=popup%25 Attach:person4.jpg  Attach:person5.jpg %25width=200px%25 Attach:person6.jpg%0a%3c %0a%3c %0a%3c %0a---%0a> %25width=200px class=popup%25 Attach:person4.jpg %25width=200px class=popup%25 Attach:person5.jpg %25width=200px class=popup%25 Attach:person6.jpg%0a\ No newline at end of file%0a
host:1730371016=172.19.0.1
author:1730370965=admin
diff:1730370965:1730370937:=24c24,26%0a%3c %25width=200px class=popup%25 Attach:person4.jpg %25width=200px class=popup%25 Attach:person5.jpg %25width=200px class=popup%25 Attach:person6.jpg%0a\ No newline at end of file%0a---%0a> %25width=200px class=popup%25 Attach:person3.jpg%0a> %25width=200px class=popup%25 Attach:person3.jpg%0a> %25width=200px class=popup%25 Attach:person3.jpg%0a\ No newline at end of file%0a
host:1730370965=172.19.0.1
author:1730370937=admin
diff:1730370937:1730370907:=20,26c20,24%0a%3c %25width=200px%25 Attach:person1.jpg \%0a%3c %25width=200px%25 Attach:person2.jpg \%0a%3c %25width=200px%25 Attach:person3.jpg%0a%3c %0a%3c %25width=200px class=popup%25 Attach:person3.jpg%0a%3c %25width=200px class=popup%25 Attach:person3.jpg%0a%3c %25width=200px class=popup%25 Attach:person3.jpg%0a\ No newline at end of file%0a---%0a> %25width=300px%25 Attach:person1.jpg \%0a> %25width=300px%25 Attach:person2.jpg \%0a> %25width=300px%25 Attach:person3.jpg%0a> %0a> %25width=300px class=popup%25 Attach:person3.jpg%0a\ No newline at end of file%0a
host:1730370937=172.19.0.1
author:1730370907=admin
diff:1730370907:1730370824:=15c15%0a%3c (:imagepopup class="popup" width="500" closebutton="false" padding="15" margin="5" wrapcount="0" :)%0a---%0a> (:imagepopup class="popup" width="600" closebutton="false" padding="15" margin="5" wrapcount="0" :)%0a
host:1730370907=172.19.0.1
author:1730370824=admin
diff:1730370824:1730370700:=15c15%0a%3c (:imagepopup class="popup" width="600" closebutton="false" padding="15" margin="5" wrapcount="0" :)%0a---%0a> (:imagepopup class="popup" width="600" closebutton="false" padding="15" margin="5" wrapcount="2" :)%0a
host:1730370824=172.19.0.1
author:1730370700=admin
diff:1730370700:1730370652:=15,19c15,19%0a%3c (:imagepopup class="popup" width="600" closebutton="false" padding="15" margin="5" wrapcount="2" :)%0a%3c %0a%3c %0a%3c %0a%3c %25apply=img class=popup%25\%0a---%0a> (:imagepopup class="left" width="600" closebutton="false" padding="15" margin="5" wrapcount="2" :)%0a> %0a> %0a> %0a> %25apply=img class=left%25\%0a24c24%0a%3c %25width=300px class=popup%25 Attach:person3.jpg%0a\ No newline at end of file%0a---%0a> %25width=300px%25 Attach:person3.jpg%0a\ No newline at end of file%0a
host:1730370700=172.19.0.1
author:1730370652=admin
diff:1730370652:1730370622:=15c15%0a%3c (:imagepopup class="left" width="600" closebutton="false" padding="15" margin="5" wrapcount="2" :)%0a---%0a> (:imagepopup class="left" width="300" closebutton="false" padding="15" margin="5" wrapcount="2" :)%0a
host:1730370652=172.19.0.1
author:1730370622=admin
diff:1730370622:1730370586:=15c15%0a%3c (:imagepopup class="left" width="300" closebutton="false" padding="15" margin="5" wrapcount="2" :)%0a---%0a> (:imagepopup class="left" width="400" closebutton="false" padding="15" margin="5" wrapcount="2" :)%0a
host:1730370622=172.19.0.1
author:1730370586=admin
diff:1730370586:1730370554:=22,23d21%0a%3c %25width=300px%25 Attach:person3.jpg%0a%3c %0a
host:1730370586=172.19.0.1
author:1730370554=admin
diff:1730370554:1730370511:=19,20c19%0a%3c %25apply=img class=left%25\%0a%3c %25width=300px%25 Attach:person1.jpg \%0a---%0a> %25apply=img class=left width=300px%25 Attach:person1.jpg \%0a
host:1730370554=172.19.0.1
author:1730370511=admin
diff:1730370511:1730370464:=15,19c15,19%0a%3c (:imagepopup class="left" width="400" closebutton="false" padding="15" margin="5" wrapcount="2" :)%0a%3c %0a%3c %0a%3c %0a%3c %25apply=img class=left width=300px%25 Attach:person1.jpg \%0a---%0a> (:imagepopup class="img" width="400" closebutton="false" padding="15" margin="5" wrapcount="2" :)%0a> %0a> %25apply=img class=left%25%0a> %0a> %25width=300px%25 Attach:person1.jpg \%0a
host:1730370511=172.19.0.1
author:1730370464=admin
diff:1730370464:1730370440:=15c15%0a%3c (:imagepopup class="img" width="400" closebutton="false" padding="15" margin="5" wrapcount="2" :)%0a---%0a> (:imagepopup class="left" width="400" closebutton="false" padding="15" margin="5" wrapcount="2" :)%0a
host:1730370464=172.19.0.1
author:1730370440=admin
diff:1730370440:1730370388:=19c19%0a%3c %25width=300px%25 Attach:person1.jpg \%0a---%0a> %25width=300px class=left%25 Attach:person1.jpg \%0a
host:1730370440=172.19.0.1
author:1730370388=admin
diff:1730370388:1730369537:=17d16%0a%3c %25apply=img class=left%25%0a
host:1730370388=172.19.0.1
author:1730369537=admin
diff:1730369537:1730369303:=15c15%0a%3c (:imagepopup class="left" width="400" closebutton="false" padding="15" margin="5" wrapcount="2" :)%0a---%0a> (:imagepopup class="img" width="400" closebutton="false" padding="15" margin="5" wrapcount="2" :)%0a
host:1730369537=172.19.0.1
author:1730369303=admin
diff:1730369303:1730369223:=15c15%0a%3c (:imagepopup class="img" width="400" closebutton="false" padding="15" margin="5" wrapcount="2" :)%0a---%0a> (:imagepopup class="left" width="400" closebutton="false" padding="15" margin="5" wrapcount="2" :)%0a
host:1730369303=172.19.0.1
author:1730369223=admin
diff:1730369223:1730368509:=18c18%0a%3c %25width=300px class=left%25 Attach:person1.jpg \%0a---%0a> %25width=300px%25 Attach:person1.jpg \%0a
host:1730369223=172.19.0.1
author:1730368509=admin
diff:1730368509:1730368149:=
host:1730368509=172.19.0.1
author:1730368149=admin
diff:1730368149:1400472661:=14,20d13%0a%3c %0a%3c (:imagepopup class="left" width="400" closebutton="false" padding="15" margin="5" wrapcount="2" :)%0a%3c %0a%3c %0a%3c %25width=300px%25 Attach:person1.jpg \%0a%3c %25width=300px%25 Attach:person2.jpg \%0a%3c %25width=300px%25 Attach:person3.jpg%0a\ No newline at end of file%0a
host:1730368149=172.19.0.1
