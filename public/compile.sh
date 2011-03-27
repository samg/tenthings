while [ true ] ; do
 haml home.html.haml > .home;
 mv .home home;
 sleep 1;
 date;
done
