import { Helmet } from "react-helmet";

const Faq = () => {
  return (
    <div className=" lg:w-7/12 mx-auto my-10 space-y-3 px-2 lg:px-0 text-white">
      <Helmet>
        <title>Gpropety | Faq Page</title>
      </Helmet>
      <div className="collapse bg-basicColor text-justify">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          Ques. 1
        </div>
        <div className="collapse-content">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem facere quia architecto, voluptatem inventore quos.
          </p>
        </div>
      </div>
      <div className="collapse bg-basicColor text-justify">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          Ques. 2
        </div>
        <div className="collapse-content">
          <p>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ab, molestias quo dolores atque voluptas aperiam illum corrupti saepe impedit. Culpa facere omnis adipisci in corporis praesentium eius, quam quaerat molestiae alias at, illum, officia totam quis. Beatae, possimus alias.
          </p>
        </div>
      </div>
      <div className="collapse bg-basicColor text-justify">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          Ques. 3
        </div>
        <div className="collapse-content">
          <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iusto ratione laboriosam aut, veritatis quia explicabo eaque, facere totam expedita deleniti ipsa esse, dolor atque ab. Laboriosam fugiat quidem deleniti.
          </p>
        </div>
      </div>
      <div className="collapse bg-basicColor text-justify">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          Ques. 4
        </div>
        <div className="collapse-content">
          <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim totam molestias, tempore eum deleniti odio! Distinctio molestiae esse quam id!
          </p>
        </div>
      </div>
      <div className="collapse bg-basicColor text-justify">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          Ques. 5
        </div>
        <div className="collapse-content">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, temporibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
