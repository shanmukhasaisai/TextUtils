import React from "react";
import PropTypes from "prop-types";

export default function NavBar(props) {
	return (
		<div>
			<nav
				className="navbar navbar-expand-lg bg-body-tertiary"
				data-bs-theme={props.mode}
			>
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						{props.title}
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="/">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/about">
									{props.aboutText}
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/contact">
									{props.contactText}
								</a>
							</li>
						</ul>
						<select className="form-select my-form mx-3" aria-label="Default select example" onClick={props.selectColor}>
					<option value="default">Choose Any Color</option>
					<option value="F15025">Orange</option>
					<option value="EF233C">Red</option>
					<option value="B5DDA4">Celadon</option>
				</select>
				<div
					className={`form-check my-form form-switch switch-container my-3  text-${
						props.mode === "light" ? "dark" : "light"
					}`}
				>

					<input
						className="form-check-input"
						onClick={props.toggleMode}
						type="checkbox"
						role="switch"
						id="flexSwitchCheckDefault"
					/>
					<label
						className="form-check-label my-label "
						htmlFor="flexSwitchCheckDefault"
					>
						Enable Dark Mode
					</label>
				</div>
					</div>
					
				</div>
				
			</nav>
		</div>
	);
}

NavBar.propTypes = {
	title: PropTypes.string.isRequired,
	aboutText: PropTypes.string,
	contactText: PropTypes.string,
};

NavBar.defaultProps = {
	title: "Set title Here",
	aboutText: "Set About here",
	contactText: "Set Contact here",
};
