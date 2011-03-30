while [ true ] ; do
 haml home.html.haml > .home;
 mv .home index.html;
 sleep 1;
 date;
done
