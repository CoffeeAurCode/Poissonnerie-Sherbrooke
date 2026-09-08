/**
 * Current shop catalog from Product list.md in the private parent repository.
 *
 * Prices are integer CAD cents per kilogram. The source's pound column is a
 * reference conversion; the application has one authoritative per-kg rate.
 * Mussels are the sole fixed-price item: $11.99 for a 2 lb bag.
 *
 * Product photos are still pending. Existing painted illustrations are reused
 * temporarily, and several products therefore intentionally share an image.
 */

const ZERO = 'ZERO_RATED_BASIC_GROCERY';
const kg = (rate, min = 250, step = 250) => ({ mode: 'perKg', rate, min, step });
const pack = (price, wMin, wMax) => ({ mode: 'pack', price, wMin, wMax });

export const CURRENT_PRODUCTS = [
  // Fresh fish
  ['fresh-fish', 'fluke', 'Fluke', 'Plie', null, null,
    'RAW', ZERO, kg(5950), '/painted/crab-stuffed-sole.webp'],
  ['fresh-fish', 'striped-bass-whole', 'Striped bass (whole)', 'Bar rayé (entier)', null, null,
    'RAW', ZERO, kg(5068), '/painted/whole-sea-bass.webp'],
  ['fresh-fish', 'striped-bass-fillet', 'Striped bass (fillet)', 'Bar rayé (filet)', null, null,
    'RAW', ZERO, kg(11020), '/painted/atlantic-cod-fillet.webp'],
  ['fresh-fish', 'black-seabass-whole', 'Black seabass (whole)', 'Bar noir (entier)', null, null,
    'RAW', ZERO, kg(5068), '/painted/whole-sea-bass.webp'],
  ['fresh-fish', 'black-seabass-fillet', 'Black seabass (fillet)', 'Bar noir (filet)', null, null,
    'RAW', ZERO, kg(11020), '/painted/atlantic-cod-fillet.webp'],
  ['fresh-fish', 'red-snapper-whole', 'Red snapper (whole)', 'Vivaneau rouge (entier)', null, null,
    'RAW', ZERO, kg(5950), '/painted/whole-sea-bass.webp'],
  ['fresh-fish', 'sea-bream-whole', 'Sea bream (whole)', 'Dorade (entière)', null, null,
    'RAW', ZERO, kg(4407), '/painted/whole-sea-bass.webp'],
  ['fresh-fish', 'branzino-whole', 'Branzino (whole)', 'Bar européen (entier)', null, null,
    'RAW', ZERO, kg(5068), '/painted/whole-sea-bass.webp'],
  ['fresh-fish', 'atlantic-cod-fillet', 'Cod fillet', 'Filet de morue', null, null,
    'RAW', ZERO, kg(5068), '/painted/atlantic-cod-fillet.webp'],
  ['fresh-fish', 'sea-bream-fillet', 'Sea bream (fillet)', 'Dorade (filet)', null, null,
    'RAW', ZERO, kg(9918), '/painted/atlantic-cod-fillet.webp'],
  ['fresh-fish', 'branzino-fillet', 'Branzino (fillet)', 'Bar européen (filet)', null, null,
    'RAW', ZERO, kg(11020), '/painted/atlantic-cod-fillet.webp'],
  ['fresh-fish', 'turbot', 'Turbot', 'Turbot', null, null,
    'RAW', ZERO, kg(5950), '/painted/crab-stuffed-sole.webp'],
  ['fresh-fish', 'grouper', 'Grouper', 'Mérou', null, null,
    'RAW', ZERO, kg(10359), '/painted/halibut-steak.webp'],
  ['fresh-fish', 'icelandic-cod-loins', 'Icelandic cod loins', 'Longes de morue islandaise', null, null,
    'RAW', ZERO, kg(9478), '/painted/atlantic-cod-fillet.webp'],
  ['fresh-fish', 'alaskan-black-cod', 'Alaskan black cod', 'Morue noire d’Alaska', null, null,
    'RAW', ZERO, kg(11462), '/painted/atlantic-cod-fillet.webp'],
  ['fresh-fish', 'chilean-seabass', 'Chilean seabass', 'Bar du Chili', null, null,
    'RAW', ZERO, kg(14548), '/painted/halibut-steak.webp'],
  ['fresh-fish', 'rainbow-trout', 'Trout', 'Truite', null, null,
    'RAW', ZERO, kg(5309), '/painted/rainbow-trout.webp'],
  ['fresh-fish', 'sole', 'Sole', 'Sole', null, null,
    'RAW', ZERO, kg(5950), '/painted/crab-stuffed-sole.webp'],
  ['fresh-fish', 'arctic-char-fillet', 'Arctic char', 'Omble chevalier', null, null,
    'RAW', ZERO, kg(6612), '/painted/arctic-char-fillet.webp'],
  ['fresh-fish', 'red-snapper-fillet', 'Red snapper', 'Vivaneau rouge', null, null,
    'RAW', ZERO, kg(11020), '/painted/atlantic-cod-fillet.webp'],
  ['fresh-fish', 'tilapia', 'Tilapia', 'Tilapia', null, null,
    'RAW', ZERO, kg(4407), '/painted/atlantic-cod-fillet.webp'],
  ['fresh-fish', 'swordfish', 'Swordfish', 'Espadon', null, null,
    'RAW', ZERO, kg(8155), '/painted/yellowfin-tuna-loin.webp'],
  ['fresh-fish', 'mahi-mahi', 'Mahi mahi', 'Mahi-mahi', null, null,
    'RAW', ZERO, kg(7053), '/painted/arctic-char-fillet.webp'],
  ['fresh-fish', 'cape-dore', 'Cape Dore', 'Cap doré', null, null,
    'RAW', ZERO, kg(7053), '/painted/atlantic-cod-fillet.webp'],
  ['fresh-fish', 'skate-wing', 'Skate wing', 'Aile de raie', null, null,
    'RAW', ZERO, kg(3525), '/painted/crab-stuffed-sole.webp'],
  ['fresh-fish', 'monkfish', 'Monkfish', 'Lotte', null, null,
    'RAW', ZERO, kg(4048), '/painted/halibut-steak.webp'],

  // Salmon and tuna
  ['salmon-tuna', 'yellowfin-tuna-loin', 'Yellowfin tuna', 'Thon à nageoires jaunes', null, null,
    'RAW', ZERO, kg(8800), '/painted/yellowfin-tuna-loin.webp'],
  ['salmon-tuna', 'atlantic-salmon-fillet', 'Atlantic salmon', 'Saumon de l’Atlantique', null, null,
    'RAW', ZERO, kg(5289), '/painted/atlantic-salmon-fillet.webp'],
  ['salmon-tuna', 'organic-salmon', 'Organic salmon', 'Saumon biologique', null, null,
    'RAW', ZERO, kg(6391), '/painted/atlantic-salmon-fillet.webp'],
  ['salmon-tuna', 'wild-salmon', 'Wild salmon', 'Saumon sauvage', null, null,
    'RAW', ZERO, kg(7053), '/painted/atlantic-salmon-fillet.webp'],
  ['salmon-tuna', 'salmon-steak', 'Salmon steaks', 'Darnes de saumon', null, null,
    'RAW', ZERO, kg(4187), '/painted/salmon-steak.webp'],
  ['salmon-tuna', 'bluefin-tuna', 'Bluefin tuna', 'Thon rouge', null, null,
    'RAW', ZERO, kg(12564), '/painted/yellowfin-tuna-loin.webp'],
  ['salmon-tuna', 'ora-king-salmon', 'Ora King salmon', 'Saumon Ora King', null, null,
    'RAW', ZERO, kg(8155), '/painted/atlantic-salmon-fillet.webp'],

  // Shellfish. The source's bare size grades are shrimp counts per pound.
  ['shellfish', 'mussels-2lb', 'Mussels, 2 lb', 'Moules, 2 lb', null, null,
    'RAW', ZERO, pack(1199, 900, 915), '/painted/blue-mussels.webp'],
  ['shellfish', 'pasta-clams', 'Pasta clams', 'Palourdes pour pâtes', null, null,
    'RAW', ZERO, kg(3525), '/painted/category-shellfish.webp'],
  ['shellfish', 'matane-shrimp', 'Matane shrimp', 'Crevettes de Matane', null, null,
    'RAW', ZERO, kg(5950), '/painted/tiger-shrimp.webp'],
  ['shellfish', 'cocktail-shrimp', 'Cocktail shrimp', 'Crevettes cocktail', null, null,
    'RAW', ZERO, kg(12560), '/painted/tiger-shrimp.webp'],
  ['shellfish', 'tenderized-octopus', 'Octopus (tenderized)', 'Pieuvre attendrie', null, null,
    'RAW', ZERO, kg(13230), '/painted/category-shellfish.webp'],
  ['shellfish', 'sea-scallops', 'Scallops', 'Pétoncles', null, null,
    'RAW', ZERO, kg(15400), '/painted/sea-scallops.webp'],
  ['shellfish', 'shrimp-8-12', 'Shrimp 8/12', 'Crevettes 8/12', null, null,
    'RAW', ZERO, kg(9918), '/painted/tiger-shrimp.webp'],
  ['shellfish', 'shrimp-4-6', 'Shrimp 4/6', 'Crevettes 4/6', null, null,
    'RAW', ZERO, kg(12340), '/painted/tiger-shrimp.webp'],
  ['shellfish', 'shrimp-16-20', 'Shrimp 16/20', 'Crevettes 16/20', null, null,
    'RAW', ZERO, kg(5509), '/painted/tiger-shrimp.webp'],
  ['shellfish', 'shrimp-16-20-pd', 'Shrimp 16/20 P&D', 'Crevettes 16/20 décortiquées et déveinées', null, null,
    'RAW', ZERO, kg(6171), '/painted/tiger-shrimp.webp'],
  ['shellfish', 'calamari', 'Calamari', 'Calmars', null, null,
    'RAW', ZERO, kg(4848), '/painted/category-shellfish.webp'],
];
