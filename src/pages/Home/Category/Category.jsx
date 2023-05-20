import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard1';
import CategoryCard1 from './CategoryCard1';
import CategoryCard2 from './CategoryCard2';
import CategoryCard3 from './CategoryCard3';

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('category.json')
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div>
      <h3 className="text-6xl text-rose-500 text-center font-bold pt-20">Lego Category</h3>
      <div className="pl-72 pr-72 pt-20">
        <Tabs>
          <TabList>
            <Tab>
              <h2 className="text-2xl">Lego City</h2>
            </Tab>
            <Tab>
              <h2 className="text-2xl">Lego Star Wars</h2>
            </Tab>
            <Tab>
              <h2 className="text-2xl">Lego Architecture</h2>
            </Tab>
            <Tab>
              <h2 className="text-2xl">Lego Cars</h2>
            </Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
              {category.map((category) => (
                <CategoryCard1 key={category._id} category={category} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {category.map((category) => (
            <CategoryCard2 key={category._id} category={category} />
          ))}
        </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {category.map((category) => (
            <CategoryCard3 key={category._id} category={category} />
          ))}
        </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Category;
