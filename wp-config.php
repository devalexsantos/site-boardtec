<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'boardtec_main' );

/** Database username */
define( 'DB_USER', 'boardtec_main' );

/** Database password */
define( 'DB_PASSWORD', 'Ansj3012@' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '2r8%{R T%wVP[9tn;>@5^-3 RV#?-R<Td9O5s@tvA?,#*5Xujc6![#hUCTc(?|e/' );
define( 'SECURE_AUTH_KEY',  'mG36MLcj)S#UPb% [=$;m#[a?:/uCeg;W>R+cnQ;_t_!VG^gmOnqEZU/5;u1:e<I' );
define( 'LOGGED_IN_KEY',    '(A+#P84h ;ZPuNP|D,.qx b`|f!K{ t,jJ<pP.8.1_NSl qguLx)r/,C-Tg<g/eM' );
define( 'NONCE_KEY',        '(b1f(ON$[0Pmn#?K`ruBp8G<nH{6p> u; kke_kKY={#K(|e~vuNj[M;2VJqz Ir' );
define( 'AUTH_SALT',        '(_<M~vdFKB+X0);XPH{LWc^1@98cj&3nt^<)F-,Bk#[7dL^I&3B,_CVdY-IoIIFn' );
define( 'SECURE_AUTH_SALT', 'cSF6.jF8.0 2Jk1S1_eJ?qIc9m%}e#FU3u(lpP*=a__XWoRuz5a{y9m2sq&BZPS1' );
define( 'LOGGED_IN_SALT',   '$]PvC0U){(r>ui?2o&3*:l6zkd`c w]y9k_tNB#H<Au{c32duTJrL1!nHYv/oW!5' );
define( 'NONCE_SALT',       '-QqMJSb0gzkK{IO%d1C23GocmRD>zu`oIcm=H5j% S|ww<>8wTCl?gMIJRD{;@M8' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
