import React from "react";

const items = [
  {
    title: "Faturon një biznes",
    content:
      "Dërgo faturën një biznesi, dhe Flexie CRM do e rikujtojë për pagesën automatikisht.",
  },
  {
    title: "Faturon një individ",
    content:
      "Zgjidh produktin ose shërbimin, fiskalizo dhe printo faturën me kodin QR, kaq e thjesht.",
  },
  {
    title: "Faturon për eksport",
    content:
      "Eksport mallrash ose shërbimesh tek klient të rregjistruar si biznes në vendin e tyre.",
  },
  {
    title: "Auto Fatura",
    content:
      "Faturo biznesin tënd për efekt TVSH-je, ose shitësi nuk është biznes i rregjistruar.",
  },
  {
    title: "E-Fatura për biznes",
    content:
      "Fatura elektronike krijohet automatikisht për biznese në Shqiperi, dhe pagesa me bank.",
  },
  {
    title: "Me dhe Pa, para në dorë",
    content:
      "Ndarje e thjeshtuar për menyrat e pagesave me bank dhe ato CASH me para në dorë.",
  },
];

const Features = ({ className, rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6 col-md-7 col-xs-8">
            <div
              className="text-center mb-7 mb-lg-17"
              data-aos="fade-up"
              data-aos-duration={500}
            >
              <h2 className="font-size-10 letter-spacing-n83">
                Tipet e faturave, që mund të të duhen.
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {items.map((item, index) => (
            <div
              className="col-xl-4 col-lg-5 col-md-6 col-sm-9 col-xs-11 mb-7 mb-lg-15"
              data-aos="fade-up"
              data-aos-duration={500}
              key={index}
            >
              <div className="d-xs-flex">
                <div className="mt-5 mt-xs-0 pl-xs-6">
                  <h3 className="font-size-7 mb-1">{item.title}</h3>
                  <p className="font-size-5 line-height-28 mb-0 pr-sm-10 pr-md-0 pr-xs-17 pr-lg-8 pr-xl-5">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
