sudo cp index.html /var/www/html/index.html;
sudo cp -r code /var/www/html/code;
cd sub;
for f in *
do
echo $f;
sudo cp -r $f /var/www/html/$f
done
