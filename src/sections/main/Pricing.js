const Pricing = ({ className, ...rest }) => {
  const PricingData = [
    {
      title: "Fatura pa limit",
      list: ["1 Përdorues", "1 Njësi Biznesi"],
      price: "€150",
    },
  ];

  return (
    <div className={`position-relative ${className}`} {...rest}>
      <div className="container">
        <div className="mb-lg-13">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-10">
              <div
                className="mb-10 mb-lg-0 text-center text-lg-left"
                data-aos="fade-right"
                data-aos-delay={500}
              >
                <h2 className="font-size-10 pr-md-10 pr-xl-0 mb-0">
                  1 Çmim, pa limite.
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="table-body">
          <div className="row justify-content-center">
            {PricingData.map(({ title, list, price }, index) => {
              return (
                <div className="col-lg-12 col-sm-6" key={index}>
                  <div
                    className="border-top pt-10 pb-8"
                    data-aos="fade-up"
                    data-aos-delay={500}
                  >
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="mb-5 mb-lg-0 text-center text-md-left text-lg-left">
                          <h3 className="font-size-7">{title}</h3>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="d-flex justify-content-center">
                          <ul className="list-unstyled font-size-6">
                            {list.map((item, index) => (
                              <li
                                className="heading-default-color mb-4"
                                key={index}
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-5 mb-lg-0 text-center text-md-right text-lg-right">
                          <h2 className="mb-0 font-size-11 font-weight-medium">
                            {price}
                          </h2>
                          <p className="mb-0 font-size-5">Abonim Vjetor.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
