# Studio Body Relax

Sajt na jednoj stranici za Studio Body Relax, masaža na Zvezdari, Beograd.

Svi fajlovi su u jednom folderu, bez podfoldera. Tako ih GitHub prima u jednom potezu.

## Objavljivanje na GitHub Pages

1. Raspakujte `studio lepote.zip`.
2. Na GitHub-u otvorite repozitorijum i kliknite **Add file**, pa **Upload files**.
3. Uđite u raspakovani folder, označite **sve fajlove** (Ctrl+A) i prevucite ih u prozor GitHub-a. Treba da ih bude 32, zajedno sa ovim README fajlom i fajlom `.nojekyll`.
4. Kliknite **Commit changes**.
5. Otvorite Settings, pa Pages. Source: **Deploy from a branch**, Branch: **main**, folder **/ (root)**, pa Save.
6. Posle minut-dva sajt radi na `https://<korisnik>.github.io/<repozitorijum>/`.

Ako ste ranije otpremili sajt bez slika, samo ponovite korake 2-4. GitHub će zameniti stare fajlove.

## Forma za upite

Forma šalje upit na mejl. Dok ne povežete servis za slanje, otvara mejl aplikaciju posetioca.
Kada napravite formu na [Formspree](https://formspree.io), upišite njen link u `FORM_ENDPOINT` na vrhu dela za formu u `script.js`.
