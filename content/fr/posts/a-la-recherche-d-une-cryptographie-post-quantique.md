---
title: "A la recherche d'une cryptographie Post-quantique"
image: /uploads/images/posts/cryptographie-post-quantique.png
date: 2021-04-22
tags:
  - cryptographie
  - algorithmique
  - code
draft: false
---

*Copyright wigglestick / Stock.Adobe.com*

*Traduction en français de l'article original publié en anglais sous le titre "[Towards a post-quantum cryptography](https://news.cnrs.fr/articles/towards-a-post-quantum-cryptography)"*

## La révolution de l'informatique quantique rendra obsolètes de nombreux concepts et dispositifs, générant ainsi certains problèmes de sécurité. Le National Institute of Standards and Technology, aux États-Unis, a organisé un concours international pour établir de nouveaux principes cryptographiques. La chercheuse Adeline Roux-Langlois nous éclaire sur les enjeux de cette compétition.

**En quoi les technologies quantiques constituent-elles une menace pour la cryptographie ?**

**Adeline Roux-Langlois :**[^1] La cryptographie repose sur des problèmes mathématiques extrêmement difficiles à résoudre ou à éviter pour les ordinateurs classiques. Cependant, les machines quantiques du futur pourront le faire plus facilement, rendant nos systèmes de protection obsolètes. Pour l'instant, les ordinateurs quantiques ne sont pas assez puissants ou avancés pour mettre en échec les protocoles cryptographiques actuels, mais il est important de s'y préparer.

Le National Institute of Standards and Technology (NIST) américain, qui est chargé d'établir diverses normes technologiques et de mesure aux États-Unis, a lancé en 2017 un concours international visant à établir un consensus scientifique concernant la cryptographie post-quantique. Ce processus est entré dans sa troisième et dernière phase, les chercheurs universitaires et industriels contribuant à l'effort. Parmi les soixante-neuf soumissions initiales, le NIST a sélectionné celles qui passeraient à l'étape suivante du concours en fonction de critères tels que la sécurité, les performances et les caractéristiques de l'implémentation. Il a également pris en considération les études publiées par la communauté scientifique, ainsi que les attaques possibles contre chaque schéma.

**Sur quoi la cryptographie est-elle actuellement basée ?**

**A. R.-L. :** Il existe deux approches pour le cryptage des données, le cryptage à clé privée et le cryptage à clé publique. Dans le cas du cryptage à clé privée, les utilisateurs partagent une clé. Cette approche est plus sûre et moins vulnérable à la technologie quantique, mais elle est aussi moins pratique à utiliser dans de nombreux cas. Le système de cryptage à clé publique repose sur deux clés, l'une gardée secrète et l'autre accessible à tous. Par exemple, tout le monde peut envoyer des e-mails cryptés à un destinataire, qui est le seul à pouvoir les lire. Il est néanmoins important de s'assurer que l'équation à partir de laquelle les clés sont calculées est suffisamment complexe, car tout algorithme capable de le résoudre en un temps raisonnable donnera accès aux données protégées. S'assurer que les problèmes mathématiques posés sont suffisamment difficiles est le fondement même de la sécurité.

Il existe aujourd'hui deux grands types de problèmes difficiles, la factorisation et le logarithme discret. La factorisation consiste à décomposer un nombre en un produit de deux nombres premiers, ce qui est beaucoup plus délicat qu'il n'y paraît lorsqu'il s'agit de très grands nombres. De même, pour l'instant, aucun algorithme ne peut calculer efficacement un logarithme discret. Le concours du NIST ne se limite pas au cryptage. D'autres algorithmes devront analyser la signature, c'est-à-dire authentifier la source d'un message sans être susceptible d'être falsifié. Dans les deux cas, les critères incluent évidemment la sécurité, mais aussi la rapidité et la fluidité du système.

Avec le développement des ordinateurs quantiques, la cryptographie doit se réinventer. Ici, le processeur quantique développé par la start-up C12 Quantum Electronics, connecté à un cryostat dans le cadre d'une campagne de tests.

![alt text](/uploads/images/posts/cryptoquantique_20200091_0020_0.jpg "Ici, le processeur quantique développé par la start-up C12 Quantum Electronics, connecté à un cryostat dans le cadre d'une campagne de tests. Copyright Hubert RAGUET / C12 Quantum Electronics / LPENS / CNRS Photothèque")

*Copyright Hubert RAGUET / C12 Quantum Electronics / LPENS / CNRS Photothèque*

**Quelles approches ont été proposées pour la cryptographie post-quantique ?**

**A. R.-L. :** Plusieurs voies sont explorées. L'une d'elles, les treillis cryptographiques, consiste à trouver les plus courts vecteurs entre deux points d'une maille, dans un espace à plusieurs centaines de dimensions. Chaque vecteur a donc un très grand nombre de coordonnées, et le problème devient extrêmement ardu à résoudre. Une autre solution, la cryptographie multivariée, se base sur un principe assez similaire en proposant de résoudre des polynômes avec tellement de variables qu'il n'est plus possible de les calculer dans un temps raisonnable. Une autre approche repose sur les codes correcteurs d'erreurs, qui sont utilisés pour améliorer les communications dégradées, par exemple pour restaurer l'apparence d'une vidéo gravée sur un DVD qui a été endommagé. Certains de ces codes fournissent un cadre très efficace pour le cryptage, mais fonctionnent assez mal lorsqu'il s'agit de vérifier une signature.

La construction de treillis est assez présente parmi les finalistes, car elle fonctionne aussi bien pour le cryptage que pour les signatures. Cependant, tous les membres de la communauté ne sont pas d'accord sur le fait qu'ils doivent faire l'objet d'une attention particulière. Le NIST préfère explorer un large spectre d'approches pour établir ses normes. De cette façon, si une solution particulière est attaquée, les autres resteront sécurisées. Par exemple, l'algorithme SPHINCS+ de l'Université de technologie d'Eindhoven, aux Pays-Bas, est basé sur des fonctions de hachage. Une empreinte numérique est attribuée aux données, une opération qu'il est extrêmement difficile d'effectuer en sens inverse, même en utilisant un algorithme quantique. Cependant, les signatures obtenues de cette manière sont gourmandes en ressources

**Quelles sont les soumissions françaises encore en lice pour le concours ?**

**A. R.-L. :** Il y a sept algorithmes impliquant des chercheurs basés en France. En ce qui concerne le chiffrement, Crystals-Kyber, NTRU et Saber sont basés sur des treillis, tandis que Classic McEliece repose sur des codes correcteurs d'erreurs. Damien Stehlé, professeur à l'ENS Lyon et membre du Laboratoire d'Informatique du LIP2,[^2] et Nicolas Sendrier, du centre de recherche INRIA à Paris, participent à la compétition. Dans la catégorie signature, les algorithmes Crystals-Dilithium et Falcon utilisent des treillis, alors que Rainbow opte pour des systèmes multivariés. Damien Stehlé fait également partie de l'équipe, tout comme Pierre-Alain Fouque, professeur à Rennes 1 et membre du laboratoire IRISA, ainsi que Jacques Patarin, professeur à l'UVSQ (Université de Versailles-Saint-Quentin-en-Yvelines).

**Quelles recherches menez-vous dans ces domaines ?**

**A. R.-L. :** Je me concentre sur la cryptographie basée sur les treillis, dans laquelle j'apporte la preuve théorique que la sécurité des constructions cryptographiques est basée sur des problèmes suffisamment difficiles pour être fiables. Le chiffrement et la signature sont les premières applications qui me viennent à l'esprit, mais elle pourrait aussi être utilisée pour assurer la confidentialité très particulière du vote électronique, pour lequel l'authenticité des votes doit être vérifiée avant le dépouillement, tout en ne révélant pas qui a voté pour qui. Je travaille également sur l'authentification anonyme, qui permet par exemple à des individus de prouver qu'ils appartiennent à un groupe sans divulguer d'autres informations, ou qu'ils sont majeurs sans donner leur âge ou leur date de naissance.

[^1]: CNRS Researcher at the IRISA (Institut de Recherche en Informatique et Systèmes Aléatoires – CNRS / Université de Rennes 1 / ENS Rennes / INSA Rennes / Université de Bretagne-Sud / INRIA / IMT Atlantique).
[^2]: Laboratoire de l’informatique du parallélisme (CNRS / ENS Lyon / Université Claude Bernard Lyon 1).

