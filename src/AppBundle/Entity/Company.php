<?php
// src/AppBundle/Entity/Company.php
namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * Company
 *
 * @ORM\Table("company")
 * @ORM\Entity
 */

class Company {
	/**
	 * @var integer
	 *
	 * @ORM\Column(name="id", type="integer")
	 * @ORM\Id
	 * @ORM\GeneratedValue(strategy="AUTO")
	 */
	protected $id;

	/**
	 * @var string
	 *
	 * @ORM\Column(name="name", type="string", length=255, nullable=false)
	 */
	protected $name;

	/**
	 * @var string
	 *
	 * @ORM\Column(name="slug", type="string", length=255, nullable=false)
	 */
	protected $slug;

	/**
	 * @var ArrayCollection
	 * @ORM\OneToMany(targetEntity="User", mappedBy="company")
	 */
	protected $users;

	/**
	 * @var ArrayCollection
	 * @ORM\OneToMany(targetEntity="Project", mappedBy="company")
	 */
	protected $projects;

	public function __construct() {
		$this -> users = new ArrayCollection();
		$this -> projects = new ArrayCollection();
	}

	/**
	 * Get id
	 *
	 * @return integer
	 */
	public function getId() {
		return $this -> id;
	}

	/**
	 * Set name
	 *
	 * @param string $name
	 *
	 * @return Companies
	 */
	public function setName($name) {
		$this -> name = $name;

		return $this;
	}

	/**
	 * Get name
	 *
	 * @return string
	 */
	public function getName() {
		return $this -> name;
	}

	public function __toString() {
		return $this -> getName();
	}

	/**
	 * Set slug
	 *
	 * @param string $slug
	 *
	 * @return Company
	 */
	public function setSlug($slug) {
		$this -> slug = $slug;

		return $this;
	}

	/**
	 * Get slug
	 *
	 * @return string
	 */
	public function getSlug() {
		return $this -> slug;
	}

	/**
	 * Add user
	 *
	 * @param \AppBundle\Entity\User $user
	 *
	 * @return Company
	 */
	public function addUser(\AppBundle\Entity\User $user) {
		$this -> users[] = $user;

		return $this;
	}

	/**
	 * Remove user
	 *
	 * @param \AppBundle\Entity\User $user
	 */
	public function removeUser(\AppBundle\Entity\User $user) {
		$this -> users -> removeElement($user);
	}

	/**
	 * Get users
	 *
	 * @return \Doctrine\Common\Collections\Collection
	 */
	public function getUsers() {
		return $this -> users;
	}

	/**
	 * Add project
	 *
	 * @param \AppBundle\Entity\Project $project
	 *
	 * @return Company
	 */
	public function addProject($project) {
		$this -> projects[] = $project;

		return $this;
	}

	/**
	 * Remove project
	 *
	 * @param \AppBundle\Entity\Project $project
	 */
	public function removeProject(\AppBundle\Entity\Project $project) {
		$this -> projects -> removeElement($project);
	}

	/**
	 * Get projects
	 *
	 * @return \Doctrine\Common\Collections\Collection
	 */
	public function getProjects() {
		return $this -> projects;
	}

}
