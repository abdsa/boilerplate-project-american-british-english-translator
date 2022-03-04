'use strict';

const Translator = require('../components/translator.js');

module.exports = function(app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      
      if (req.body.text === "") {
        res.json({ error: 'No text to translate' })
        return;
      }
      if (!req.body.text || !req.body.locale) {
        res.json({ error: 'Required field(s) missing' })
        return;
      }


      let result;
      if (req.body.locale === "american-to-british") {
        result = translator.americanOnlyTranslator(req.body.text)
        if (result === undefined) {
          res.json({ translation: "Everything looks good to me!" })
          return;
        }
        console.log(result)

        res.json({ text: req.body.text, translation: result })
        return;
      }
      else if (req.body.locale === "british-to-american") {
        result = translator.britishOnlyTranslator(req.body.text)
        if (result === undefined) {
          res.json({ translation: "Everything looks good to me!" })
          return;
        }
        console.log(result)
        res.json({ text: req.body.text, translation: result })
        return;
      }

    });
};
