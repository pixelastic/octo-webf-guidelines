# Guidelines pour les développeurs front-end

Ces guidelines ont pour but de permettre aux développeurs front d'avoir un
ensemble de conventions partagées qui peuvent être réutilisées de projet en
projet.

Ces conventions ne sont pas faites pour être appliquées à la lettre et vous
êtes invités à les discuter et les modifier pour vos propres projets. 

La seule règle capitale est que tous les développeurs doivent suivre les mêmes
convention. Le code dans son ensemble doit sembler avoir été écrit par la même
personne.

## Paramètres d'IDE
Ces configurations permettent de s'assurer d'avoir un rendu consistant sur
toutes les plateformes et IDE. Ils évitent aussi d'avoir des diff entre deux
versions à chaque fois qu'un fichier est enregistré sur un poste différent.

La majorité des IDE permettent de configurer ces options. Si votre IDE ne le
permet pas, changez d'IDE.

### Indenter avec 2 espaces
C'est la configuration utilisée par html5boilerplate.

### Ne pas laisser d'espaces en fin de ligne.
Ces caractères sont inutiles.

### Enregistrer les fichier en UTF-8.
Permet d'assurer la meilleur compatibilité d'encoding. Vérifiez bien que votre
IDE n'ajoute pas de [BOM](http://en.wikipedia.org/wiki/Byte_order_mark).

### Utiliser le délimiteur de new line Unix (LF).
Le [séparateur](http://blog.codinghorror.com/the-great-newline-schism/) Unix
(LF) est utilisé par html5boilerplate. Il utilise moins de bytes que le
séparateur Windows et est plus répandu que le séparateur Mac.


Todo :
- nom de classe avec des tirets en css
- pas d'ids dans les sélecteurs
- ajouter des styles pour :focus, :active, :hover
- pas de style dans le js, tout dans le css
- éviter le HTML dans le js, si nécessaire, utiliser des <script template>
