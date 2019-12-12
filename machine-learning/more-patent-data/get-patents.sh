#!/bin/bash

LATESTYEAR=2015
EARLIESTYEAR=1980

echo "Starting at $LATESTYEAR and counting back to $EARLIESTYEAR..."


for (( YEAR=LATESTYEAR; YEAR>=EARLIESTYEAR; YEAR-- ))
do
  echo "Downloading patents from $YEAR"
  curl -# -X GET --header "Accept: application/xml" "https://assignment-api.uspto.gov/patent/basicSearch?query=*&fields=main&rows=1000000&filter_year="${YEAR} -k > ${YEAR}.xml
done
