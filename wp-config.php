<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true);
define( 'WPCACHEHOME', '/home/reosim/www/wp-content/plugins/wp-super-cache/' );
define('DB_NAME', 'reosimmod1');

/** MySQL database username */
define('DB_USER', 'reosimmod1');

/** MySQL database password */
define('DB_PASSWORD', '528uGXTz');

/** MySQL hostname */
define('DB_HOST', 'reosimmod1.mysql.db:3306');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'FtSZnazH/+D++Pt+BO25veCA0Lv94N1XHEbQmCgUh+Z1dGCrzjYHzxshDQBR');
define('SECURE_AUTH_KEY',  'xcBdJ/FZK+di2f+VMO3Os5sEvbKaDrOfn9nEjRC1ZhTg1KFGyx+2KxnsThH4');
define('LOGGED_IN_KEY',    '4BRW+szOFHcHZWEgPQrDqkzPPDkFbBkzh6T5Rtk0v9FwIO5+gz5g+Q1ZU8KQ');
define('NONCE_KEY',        '8uJSZswdZ1cc9UntoJUXKDDL5l6sjAG9l3rzEguITAE4sFWqI7RwlTzACiPx');
define('AUTH_SALT',        '71ziRNDhLookOUj6YGv7S61aZFtbPy+1w0kjI4bHkZoXGNj2fcmgKfJsYU2U');
define('SECURE_AUTH_SALT', 'R6kAW3Yzlk/EQJ4FcUXyw7koPs83yFuoJ/6Z1j7p9+OV6CTPUoDRdL+en3gk');
define('LOGGED_IN_SALT',   'N7IS7e1IMGtHuoLnv8Hr5/1nZ/NKRQp4VrJEbn1OHD1e32AHkNYEkk7y9FfP');
define('NONCE_SALT',       'IwOu8T5FgjxaJxPrjt9YTso+YGI1JyeFfQuZNuvYzE8DIpkNlG/FrmcsWUky');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wor2821_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/* Fixes "Add media button not working", see http://www.carnfieldwebdesign.co.uk/blog/wordpress-fix-add-media-button-not-working/ */
define('CONCATENATE_SCRIPTS', false );

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
