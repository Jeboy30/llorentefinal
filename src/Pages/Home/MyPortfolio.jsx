import data from "../../data/index.json";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">

          <h1 className="section--heading">My Portfolio</h1>
          <h2>Welcome to My Portfolio!

I’m Jeboy Llorente, a 4th-year Computer Science student at NEMSU Lianga, and a passionate developer with a keen interest in mobile app development, gaming, and sports. This portfolio highlights my skills, projects, and personal interests that define me both professionally and personally.</h2>
<h2>Mobile App Development

In the world of technology, I focus on crafting clean, efficient, and intuitive mobile applications, with a particular interest in React Native and Flutter. Whether it's developing innovative solutions or diving deep into the nuances of programming, I take pride in creating meaningful and user-friendly apps that solve real-world problems.</h2>
<h2>Gaming and Sports

Outside of development, I am an avid gamer and tennis enthusiast. Gaming fuels my creativity and enhances my problem-solving skills, while tennis keeps me active and motivated. One of my favorite things to enjoy during downtime is a delicious serving of Shomai and Fries – a combination I can’t resist!</h2>
        </div>
        <div></div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
                 
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
