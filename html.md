# HTML

## Indentation

#### Utiliser deux espaces.
Cela permet de s'assurer d'avoir le même rendu sur tous les postes. C'est aussi
la configuration utilisée par html5boilerplate.

#### Indenter chaque balise.
Cela permet de visualiser plus facilement la hiérarchie des différents
éléments.

Exemple :
    <ul>
      <li>
        <a href="#">Lien</a>
      </li>
      <li>
        <a href="#">
          <span>Another link with a span in it</span>
        </a>
      </li>
    </ul>

## Balises

#### Toujours en minuscule.
Pour l'uniformité. Seul le `<!DOCTYPE html>` est une exception à la règle.

#### Ajouter un `/>` de fermeture pour les self-closing tags.
Même si ajouter `/>` est facultatif sur ces éléments, l'ajouter démontre bien
l'intention et non pas qu'on a oublié de fermer un tag.

On pourra omettre le `/>` seulement pour les balises auto-fermantes qui ne
comportent pas d'attributs.

Exemples :
    <img src="img.jpg /> GOOD
    <img src="img.jpg"> BAD

    <br> GOOD
    <br /> BAD

    <hr> GOOD
    <hr class="secondary" /> GOOD

#### Toujours fermer les balises, même si optionnel.  Même si certaines balises
comme `<body>`, `<li>`, `<dt>` ou `<dd>` peuvent ne pas être fermées, le faire
permet de mieux visualiser l'imbrication des éléments.

## Attributs

#### Toujours en minuscule.
Pour l'uniformité.

#### Utiliser des double quotes.
Cela nous permet d'utiliser des single quotes dans le javascript et de pouvoir
ainsi écrire du javascript dans un attribut html et du html dans une string
javascript.

## URL

#### Utiliser des adresses relatives.
On privilegiera les urls de la forme `path/to/page.html` aux urls
`http://www.site.com/path/to/page.html` dans les attributs (`href` pour `a`,
`src` pour `script`, etc).

On pourra bien sur utiliser les urls absolues si on pointe vers un autre domaine.

Les syntaxes `href="./path/to/page.html"` et `href="path/to/file.html"` étant
équivalentes, on préferera la seconde car elle est plus succinte.

Si on doit utiliser des adresses absolues (limitation du CMS, profondeur de
lien trop complexe), on utilisera la syntaxe `//`, qui permet d'utiliser
`https` ou `http` en fonction du contexte.

Exemple :

    <a href="http://www.site.com/path/to/file.html">Lien</a> BAD
    <a href="/path/to/file.html">Lien</a> BAD
    <a href="./path/to/file.html">Lien</a> BAD

    <a href="path/to/file.html">Lien</a> GOOD
    <a href="//www.site.com/path/to/file.html">Lien</a> GOOD

## Images

#### Toujours mettre un attribut `alt`.
Pour l'accessibilité, cela permet aux terminaux qui ne peuvent pas afficher
d'image d'avoir une information sur le contenu de l'image.

## Compatibilité

#### Toujours utiliser le doctype HTML5.
Cela nous permet d'avoir la plus grande cohérence de rendu sur l'ensemble des
navigateurs.

#### Toujours dire à IE d'utiliser la dernière version de son moteur de rendu.
L'ajout de la balise suivante indique à IE d'utiliser la dernière version de
son moteur de rendu. Sans cette balise, il utilisera un fallback de
compatibilité moins performant.

    <meta http-equiv="X-UA-Compatible" content="IE=Edge">

Plus d'infos sur cette balise sur
[StackOverflow](http://stackoverflow.com/questions/6771258/whats-the-difference-if-meta-http-equiv-x-ua-compatible-content-ie-edge-e)

#### Toujours utiliser de l'UTF-8.
En plus d'avoir les fichiers html encodés en UTF-8 et le serveur qui les envoie
en précisant `Content-Type: text/html; charset=utf-8`, il est important
d'indiquer dans le `<head>` que la page est en UTF-8 avec la balise suivante :

    <meta charset="UTF-8">

## CSS

#### Inclure les feuilles de style en haut de page.
Inclure les feuilles de style en haut de page permet au navigateur d'afficher
la mise en forme plus rapidement et d'éviter un
[FOUC](http://fr.wikipedia.org/wiki/FOUC).

Note : _Il peut parfois être nécessaire de déroger à cette règle en incluant les
feuilles de style secondaires en bas de page pour optimiser le temps de rendu
des styles principaux._

#### Ne pas ajouter l'attribut `type="text/css"` sur les balises `<link>`.
Le type par défaut de la balise `<link>` est déjà `text/css`, il est inutile de
l'ajouter.

#### Ne jamais utiliser la balise `<style>`.
Le css doit être chargé depuis un fichier CSS externe. En ajouter dans une
balise `<style>` dans le HTML rends sa maintenabilité beaucoup plus difficile.

#### Ne JAMAIS utiliser l'attribut `style`.
Une règle CSS ajoutée depuis l'attribut `style` a la priorité la plus haute et
ne peux alors jamais être overridée par une feuille de style externe.

## Javascript

#### Inclure les fichiers de scripts en bas de page.
Le navigateur bloque son execution pendant qu'il télécharge et parse un fichier
Javascript. En les mettant haut de page, on l'empeche d'afficher le contenu
tant que le fichier n'est pas complétement chargé. On préfère donc les mettre
en base de page.

#### Ne pas utiliser de balise `<script>` inline.
Les fichiers HTML ne devraient contenir que du code HTML, le code Javascript
devrait se trouver dans des fichiers `.js` chargés séparemment. En mélangeant
les deux on rends la maintenabilité plus complexe.

#### Ne pas ajouter l'attribut `type="text/javascript"` sur les balises `<script>`.
Le type par défaut de la balise `<script>` est déjà `text/javascript`, il est
inutile de l'ajouter.

## Configuration

### Vim
Put this lines in your `~/.vim/after/ftplugin/html.vim`

    " Use two spaces for indenting
    setlocal tabstop=2
    setlocal shiftwidth=2
    setlocal softtabstop=2
    setlocal expandtab
