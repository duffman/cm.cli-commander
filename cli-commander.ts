// #! /usr/bin/env node

const args = process.argv.slice(2);

function getFirst() {
	return args.length > 0 ? args[0] : null;
}
/*

SELECT
mq.id,
	mq.session_id,
	pe.game_id AS product_id,
	mq.barcode,
	mq.title,
	mq.price,
	mq.message,
	mq.processed_when,
	ms.vendor_id
FROM
	price_miner_queue AS mq,
	price_miner_session AS ms,
	product_edition AS pe
WHERE
mq.processed_when IS NOT NULL
AND
mq.bid_migrated = 0
AND
ms.id = 31
AND
mq.price > -1
AND
mq.session_id = ms.id
AND
pe.barcode = mq.barcode

LIMIT 1000
*/