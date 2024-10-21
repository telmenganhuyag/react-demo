import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const InputField = ({ label, type = "text", value, onChange, ...props }) => (
  <label className="form-control w-full sm:max-w-xs">
    <span className="label label-text">{label}</span>
    <input
      type={type}
      className="input input-bordered w-full max-w-xs"
      value={value}
      onChange={onChange}
      {...props}
    />
  </label>
);

const YearSelect = ({ label, value, onChange, years }) => (
  <label className="form-control w-full sm:max-w-xs">
    <span className="label-text-alt">{label}</span>
    <select
      className="select select-bordered rounded-box bg-base-100 p-2 shadow"
      value={value}
      onChange={onChange}
    >
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  </label>
);

const EditPage = ({ userInfo, updateUserInfo }) => {
  const [formData, setFormData] = useState(userInfo);
  const navigate = useNavigate();
  console.log("EditPage rendered");

  // Define the years array
  const currentYear = new Date().getFullYear();
  const startYear = 1950;
  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => startYear + i,
  );

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleObjectArrayInputChange = (field, index, subfield, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: prevData[field].map((item, i) =>
        i === index ? { ...item, [subfield]: value } : item,
      ),
    }));
  };

  const handleArrayInputChange = (field, index, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: prevData[field].map((item, i) => (i === index ? value : item)),
    }));
  };

  const addItem = (field, defaultValue) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: [...prevData[field], defaultValue],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    updateUserInfo(formData);
    navigate("/");
  };

  return (
    <div className="container form-control h-full items-center justify-center pb-10">
      <form className="form-control gap-2 pt-10" onSubmit={handleSubmit}>
        <InputField
          label="Name"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
        <InputField
          label="Title"
          value={formData.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
        />
        <InputField
          label="Avatar"
          type="file"
          className="file-input file-input-bordered w-full max-w-xs"
        />
        <label className="form-control w-full max-w-xs">
          <span className="label label-text">Description</span>
          <textarea
            className="textarea textarea-bordered h-24"
            value={formData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
          ></textarea>
        </label>
        <InputField
          label="Phone Number"
          type="tel"
          value={formData.phoneNumber}
          onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
        />
        <InputField
          label="Email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
        <InputField
          label="Location"
          value={formData.location}
          onChange={(e) => handleInputChange("location", e.target.value)}
        />
        <div className="form-control w-full max-w-xs">
          <span className="label label-text">Language</span>
          {formData.languages.map((language, index) => (
            <InputField
              key={index}
              value={language}
              onChange={(e) =>
                handleArrayInputChange("languages", index, e.target.value)
              }
            />
          ))}
          <button
            type="button"
            className="btn btn-outline btn-neutral btn-sm mt-2 self-end"
            onClick={() => addItem("languages", "")}
          >
            Add More
          </button>
        </div>

        {/* Expertise Section */}
        <div className="form-control w-full max-w-xs">
          <span className="label label-text">Expertise</span>
          {formData.expertise.map((exp, index) => (
            <InputField
              key={index}
              value={exp}
              onChange={(e) =>
                handleArrayInputChange("expertise", index, e.target.value)
              }
            />
          ))}
          <button
            type="button"
            className="btn btn-outline btn-neutral btn-sm mt-2 self-end"
            onClick={() => addItem("expertise", "")}
          >
            Add More
          </button>
        </div>

        {/* Experience Section */}
        <div className="form-control">
          <span className="label label-text">Experience</span>
          {formData.experiences.map((exp, index) => (
            <div key={index}>
              <div className="flex flex-wrap gap-4">
                <InputField
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) =>
                    handleObjectArrayInputChange(
                      "experiences",
                      index,
                      "company",
                      e.target.value,
                    )
                  }
                />
                <InputField
                  placeholder="City"
                  value={exp.city}
                  onChange={(e) =>
                    handleObjectArrayInputChange(
                      "experiences",
                      index,
                      "city",
                      e.target.value,
                    )
                  }
                />
                <InputField
                  placeholder="Country"
                  value={exp.country}
                  onChange={(e) =>
                    handleObjectArrayInputChange(
                      "experiences",
                      index,
                      "country",
                      e.target.value,
                    )
                  }
                />
              </div>
              <div className="flex gap-7 p-5">
                <YearSelect
                  label="From"
                  value={exp.from}
                  onChange={(e) =>
                    handleObjectArrayInputChange(
                      "experiences",
                      index,
                      "from",
                      parseInt(e.target.value),
                    )
                  }
                  years={years}
                />
                <YearSelect
                  label="To"
                  value={exp.to}
                  onChange={(e) =>
                    handleObjectArrayInputChange(
                      "experiences",
                      index,
                      "to",
                      parseInt(e.target.value),
                    )
                  }
                  years={years}
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-outline btn-neutral btn-sm self-end"
            onClick={() =>
              addItem("experiences", {
                company: "",
                city: "",
                country: "",
                from: currentYear,
                to: currentYear,
              })
            }
          >
            Add More
          </button>
        </div>

        {/* Education Section */}
        <div className="form-control">
          <span className="label label-text">Education</span>
          {formData.education.map((edu, index) => (
            <div key={index}>
              <div className="flex flex-wrap gap-4">
                <InputField
                  placeholder="University"
                  value={edu.university}
                  onChange={(e) =>
                    handleObjectArrayInputChange(
                      "education",
                      index,
                      "university",
                      e.target.value,
                    )
                  }
                />
                <InputField
                  placeholder="Career"
                  value={edu.career}
                  onChange={(e) =>
                    handleObjectArrayInputChange(
                      "education",
                      index,
                      "career",
                      e.target.value,
                    )
                  }
                />
              </div>
              <div className="flex gap-7 p-5">
                <YearSelect
                  label="From"
                  value={edu.from}
                  onChange={(e) =>
                    handleObjectArrayInputChange(
                      "education",
                      index,
                      "from",
                      parseInt(e.target.value),
                    )
                  }
                  years={years}
                />
                <YearSelect
                  label="To"
                  value={edu.to}
                  onChange={(e) =>
                    handleObjectArrayInputChange(
                      "education",
                      index,
                      "to",
                      parseInt(e.target.value),
                    )
                  }
                  years={years}
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-outline btn-neutral btn-sm self-end"
            onClick={() =>
              addItem("education", {
                university: "",
                career: "",
                from: currentYear,
                to: currentYear,
              })
            }
          >
            Add More
          </button>
        </div>

        {/* Skills Summary Section */}
        <div className="form-control mb-10 w-full max-w-xs">
          <span className="label label-text">Skills Summary</span>
          {formData.skillsSummary.map((skill, index) => (
            <InputField
              key={index}
              value={skill.skill}
              onChange={(e) =>
                handleArrayInputChange("skillsSummary", index, e.target.value)
              }
            />
          ))}
          <button
            type="button"
            className="btn btn-outline btn-neutral btn-sm mt-2 self-end"
            onClick={() => addItem("skillsSummary", "")}
          >
            Add More
          </button>
        </div>
        <button
          type="submit"
          className="btn btn-accent btn-md btn-wide self-center"
        >
          Save
        </button>
        <Link to="/" className="btn btn-primary btn-md btn-wide self-center">
          Go Back
        </Link>
      </form>
    </div>
  );
};

export default EditPage;
