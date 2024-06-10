// Step 1: Import the parts of the module you want to use
// import { MercadoPagoConfig, Payment } from 'mercadopago';
const { MercadoPagoConfig, Payment } = require('mercadopago');

// Step 2: Initialize the client object
const client = new MercadoPagoConfig(
  { 
    accessToken: 'APP_USR-7845463688011799-061009-496adb23f016093f2c055a949d49ac4f-141342279',
    options: { timeout: 5000, idempotencyKey: 'abc' }
  }
);

// Step 3: Initialize the API object
const payment = new Payment(client);

var express = require('express');
const e = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express v0.0.1' });
});

const MOCK_RESULT = {
  accounts_info: null,
  acquirer_reconciliation: [],
  additional_info: {
    authentication_code: null,
    available_balance: null,
    nsu_processadora: null
  },
  authorization_code: null,
  binary_mode: false,
  brand_id: null,
  build_version: '3.55.3-hotfix-1',
  call_for_authorize_id: null,
  callback_url: null,
  captured: true,
  card: {},
  charges_details: [
    {
      accounts: [Object],
      amounts: [Object],
      client_id: 0,
      date_created: '2024-06-10T09:18:48.000-04:00',
      id: '79979210671-001',
      last_updated: '2024-06-10T09:18:48.000-04:00',
      metadata: {},
      name: 'mercadopago_fee',
      refund_charges: [],
      reserve_id: null,
      type: 'fee'
    }
  ],
  collector_id: 141342279,
  corporation_id: null,
  counter_currency: null,
  coupon_amount: 0,
  currency_id: 'BRL',
  date_approved: null,
  date_created: '2024-06-10T09:18:48.000-04:00',
  date_last_updated: '2024-06-10T09:18:51.000-04:00',
  date_of_expiration: '2024-06-11T09:18:47.000-04:00',
  deduction_schema: null,
  description: 'Pagamento de teste v03',
  differential_pricing_id: null,
  external_reference: null,
  fee_details: [],
  financing_group: null,
  id: 79979210671,
  installments: 1,
  integrator_id: null,
  issuer_id: '12501',
  live_mode: true,
  marketplace_owner: null,
  merchant_account_id: null,
  merchant_number: null,
  metadata: {},
  money_release_date: null,
  money_release_schema: null,
  money_release_status: 'released',
  notification_url: null,
  operation_type: 'regular_payment',
  order: {},
  payer: {
    email: null,
    entity_type: null,
    first_name: null,
    id: '1430995342',
    identification: { number: null, type: null },
    last_name: null,
    operator_id: null,
    phone: { area_code: null, extension: null, number: null },
    type: null
  },
  payment_method: { id: 'pix', issuer_id: '12501', type: 'bank_transfer' },
  payment_method_id: 'pix',
  payment_type_id: 'bank_transfer',
  platform_id: null,
  point_of_interaction: {
    application_data: { name: null, version: null },
    business_info: { branch: null, sub_unit: 'sdk', unit: 'online_payments' },
    location: { source: null, state_id: null },
    transaction_data: {
      bank_info: [Object],
      bank_transfer_id: null,
      e2e_id: null,
      financial_institution: null,
      infringement_notification: [Object],
      qr_code: '00020126580014br.gov.bcb.pix01366103e8ad-2012-4900-b3e9-e79765c5e69c52040000530398654041.005802BR5916GERSONCRISOSTOMO6013Corao de Jesu62240520mpqrinter7997921067163044077',
      qr_code_base64: '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',
      ticket_url: 'https://www.mercadopago.com.br/payments/79979210671/ticket?caller_id=1430995342&hash=bcf13217-f7c9-4174-a43d-65df5ab6b6a4',
      transaction_id: null
    },
    type: 'OPENPLATFORM'
  },
  pos_id: null,
  processing_mode: 'aggregator',
  refunds: [],
  release_info: null,
  shipping_amount: 0,
  sponsor_id: null,
  statement_descriptor: null,
  status: 'pending',
  status_detail: 'pending_waiting_transfer',
  store_id: null,
  tags: null,
  taxes_amount: 0,
  transaction_amount: 1,
  transaction_amount_refunded: 0,
  transaction_details: {
    acquirer_reference: null,
    bank_transfer_id: null,
    external_resource_url: null,
    financial_institution: null,
    installment_amount: 0,
    net_received_amount: 0,
    overpaid_amount: 0,
    payable_deferral_period: null,
    payment_method_reference_id: null,
    total_paid_amount: 1,
    transaction_id: null
  }
}

router.post('/criar-pix', function(req, res, next) {
  console.log("REQUEST")
  console.log(req.body.body)

  const body = { 
    transaction_amount: req.body.body.transaction_amount,
    description: req.body.body.description,
    payment_method_id: req.body.body.paymentMethodId,
        payer: {
        email: req.body.body.email,
        identification: {
    type: req.body.body.identificationType,
    number: req.body.body.number
  }}}
  const requestOptions = { idempotencyKey: '<SOME_UNIQUE_VALUE>' }

  payment.create({ body, requestOptions })
    .then((result) => {
      console.log("result")
      console.log(result)
      res.send(result)
    })
    .catch((error) => {
      console.log("ERROR")
      console.log(error)
      res.status(500).json({ error: error.message });
    })


  // res.send(MOCK_RESULT);
});

module.exports = router;
