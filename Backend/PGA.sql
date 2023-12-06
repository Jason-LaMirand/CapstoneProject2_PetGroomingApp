\echo 'Delete and recreate PGA db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE PGA;
CREATE DATABASE PGA;
\connect PGA
DROP TABLE dogbreeds CASCADE;
DROP TABLE dogbreedtypes CASCADE;
DROP TABLE pets CASCADE;
DROP TABLE users CASCADE;
DROP TABLE petApplications CASCADE;


\i PGA-schema.sql
\i PGA-seeds.sql


